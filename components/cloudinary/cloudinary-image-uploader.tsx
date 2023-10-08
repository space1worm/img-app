"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  public_id: string;
};

export default function ImageUploader() {
  const [imageId, setImageId] = useState<string | null>(null);

  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result) => {
          const info = result.info as UploadResult;
          setImageId(info.public_id);
        }}
        uploadPreset="myt53wsq"
      />
    </Button>
  );
}
