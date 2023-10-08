"use client";

import { CldImage } from "next-cloudinary";

export default function Image({ src }: { src: string }) {
  return (
    <CldImage
      width={400}
      height={300}
      src={src}
      sizes="100vw"
      alt="an image of something"
    />
  );
}
