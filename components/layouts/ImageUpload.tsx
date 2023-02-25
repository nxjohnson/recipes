import Image from "next/image";
import { MdOutlineClear } from "react-icons/md";
import UploadImageByComputer from "../ui/UploadImageByComputer";
import UploadImageByURL from "../ui/UploadImageByURL";

interface Props {
  image: string | null;
  updateImage: any;
  required?: boolean;
}

export default function ImageUpload({
  image,
  updateImage,
  required = false,
}: Props) {
  const cloudfrontUrl: string = "https://df57m1pwz0yak.cloudfront.net";

  async function deleteImage() {
    if (image!.startsWith(cloudfrontUrl)) {
      const filename = image!.split("/")[3];
      const res = await fetch(`/api/recipeImages?filename=${filename}`, {
        method: "DELETE",
      });
    }
    updateImage(null);
  }

  return (
    <>
      <label className="block font-medium">
        Recipe Image
        {required ? <span className="text-error">{" *"}</span> : <></>}
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col w-full gap-2">
            <UploadImageByComputer
              image={image}
              updateImage={updateImage}
              deleteImage={deleteImage}
              cloudfrontUrl={cloudfrontUrl}
            />
            <UploadImageByURL updateImage={updateImage} />
          </div>
        </div>
      </label>
      {image ? (
        <div className="relative aspect-2/3 w-full">
          <div
            className="absolute top-4 right-4 z-10 p-1 bg-neutral-200 rounded-full cursor-pointer"
            onClick={deleteImage}
          >
            <MdOutlineClear className="text-2xl" />
          </div>
          <Image
            className="object-cover"
            src={image}
            alt="Uploaded image"
            fill={true}
            priority
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
