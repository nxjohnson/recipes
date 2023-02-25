import { useState } from "react";
import Button from "./Button";

interface Props {
  updateImage: any;
}

export default function UploadImageByURL({ updateImage }: Props) {
  const [url, setUrl] = useState<string>("");

  function uploadImageURL() {
    updateImage(url);
    setUrl("");
  }

  return (
    <label className="block">
      Upload Image from a URL
      <div className="flex">
        <input
          className="w-full"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="w-fit" onClick={uploadImageURL}>Upload</Button>
      </div>
    </label>
  );
}
