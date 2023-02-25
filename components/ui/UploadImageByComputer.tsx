import { MdOutlineImage } from "react-icons/md";
import { ChangeEvent, MouseEvent } from "react";

interface Props {
  image: string | null;
  updateImage: any;
  deleteImage: () => Promise<void>;
  cloudfrontUrl: string;
}

export default function UploadImageByComputer({
  image,
  updateImage,
  deleteImage,
  cloudfrontUrl,
}: Props) {
  const clickInput = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const input: HTMLElement = document.querySelector("#imageUpload")!;
    input.click();
  };

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (!e.target.files.length) {
      return;
    }
    if (image) {
      deleteImage();
    }
    const file = e.target.files?.[0]!;
    const fileType = encodeURIComponent(file.type);

    const res = await fetch(`/api/recipeImages?fileType=${fileType}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      const imageUrl = `${cloudfrontUrl}/${fields.key}`;
      updateImage(imageUrl);
    } else {
      console.error("Upload failed.");
    }
  };

  return (
    <>
      <div
        className="py-4 border-2 border-neutral-200 border-dashed cursor-pointer"
        onClick={(e) => clickInput(e)}
      >
        <div className="flex flex-col gap-2">
          <MdOutlineImage className="self-center text-3xl" />
          <span className="self-center">Upload an Image</span>
          <span className="self-center text-sm font-normal">
            JPG or PNG up to 5MB
          </span>
        </div>
      </div>
      <input
        id="imageUpload"
        name="image"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => uploadImage(e)}
      />
    </>
  );
}
