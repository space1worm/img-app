"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UploadResult = {
  public_id: string;
};

export default function ImageUploader() {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset="myt53wsq"
        onUpload={() => {
          setTimeout(() => {
            //TODO this is quick fix because of race condition, need to find better solution
            router.refresh();
          }, 1000);
        }}
      />
    </Button>
  );
}
