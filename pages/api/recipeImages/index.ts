import type { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "node:crypto";

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.USER_ACCESS_KEY_ID!,
    secretAccessKey: process.env.USER_SECRET_ACCESS_KEY!,
  },
  region: process.env.S3_BUCKET_REGION,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { fileType } = req.query;
    const filename: string = randomUUID();
    const extension: string = fileType!.split("/")[1];

    const key: string = `${filename}.${extension}`;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Fields: {
        key,
        "Content-Type": fileType,
      },
      Expires: 60,
      Conditions: [
        ["content-length-range", 0, 10 * 1024 * 1024], // up to 10 MB
      ],
    };

    const post = await s3.createPresignedPost(params);

    res.status(200).json(post);
  }

  if (req.method === "DELETE") {
    const { filename } = req.query;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: filename,
    };

    const deleteImage = await s3.deleteObject(params).promise();

    res.status(200).json(deleteImage);
  }
}
