"use client";

import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/utils/routes";
import { Button } from "@/components/ui/button";

type UploadResult = {
  public_id: string;
};

export default function Home() {
  const router = useRouter();
  const [imageId, setImageId] = useState<string | null>(null);

  if (imageId) {
    setTimeout(() => {
      router.push(ROUTES.gallery);
    }, 1000);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <Button asChild>
        <CldUploadButton
          onUpload={(result) => {
            const info = result.info as UploadResult;
            setImageId(info.public_id);
          }}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        />
      </Button>
    </main>
  );
}
