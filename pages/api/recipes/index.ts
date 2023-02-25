import clientPromise from "../../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  if (method !== "POST") {
    return res.status(404);
  }
  try {
    const client = await clientPromise;
    const db = client.db("recipesDb");
    const response = await db.collection("recipes").insertOne(JSON.parse(body));

    res.status(201).send(response.insertedId);
  }
  catch(error) {
    console.log(error)
    res.status(404)
  }

}
