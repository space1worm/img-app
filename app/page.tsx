"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  public_id: string;
};

export default function Home() {
  const [imageId, setImageId] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CldUploadButton
        onUpload={(result) => {
          const info = result.info as UploadResult;
          setImageId(info.public_id);
        }}
        uploadPreset="myt53wsq"
      />
      {imageId && (
        <CldImage
          width={400}
          height={300}
          src="qbtscyraz10wumv8hh02"
          sizes="100vw"
          alt="Description of the image"
        />
      )}
    </main>
  );
}
