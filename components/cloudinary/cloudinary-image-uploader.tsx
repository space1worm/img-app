"use client";

import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function ImageUploader() {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
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
