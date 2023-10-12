"use client";

import { CldImage } from "next-cloudinary";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type Transformations = undefined | "generative-fill" | "blur" | "grayscale" | "pixelate";

type Props = {
  searchParams: {
    publicId: string;
  };
};

export default function EditPage({ searchParams }: Props) {
  const [transformation, setTransformation] = useState<Transformations>();

  const { publicId } = searchParams;

  return (
    <div className="space-y-8 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit Photo</h1>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setTransformation("generative-fill")}>Generative Fill</Button>
        <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
        <Button onClick={() => setTransformation("grayscale")}>Convert to Gray</Button>
        <Button onClick={() => setTransformation("pixelate")}>Pixelate</Button>
        <Button variant="destructive" onClick={() => setTransformation(undefined)}>
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <CldImage src={publicId} width={300} height={200} alt="some image" />
        {transformation === "blur" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CldImage src={publicId} width={300} height={200} alt="some image" blur="800" />
        )}

        {transformation === "generative-fill" && (
          <CldImage
            src={publicId}
            width={300}
            height={200}
            alt="some image"
            crop="pad"
            fillBackground
          />
        )}

        {transformation === "grayscale" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore

          <CldImage src={publicId} width={300} height={200} alt="some image" grayscale />
        )}

        {transformation === "pixelate" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore

          <CldImage src={publicId} width={300} height={200} alt="some image" pixelate />
        )}
      </div>
    </div>
  );
}
