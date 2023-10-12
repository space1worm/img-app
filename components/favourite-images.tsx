"use client";

import ImageGrid from "@/layout/images-layouts";
import type { ImageResource } from "@/types";

import { useEffect, useState } from "react";

import CloudinaryImage from "./cloudinary-image";

type Props = {
  intialResources: ImageResource[];
};

export default function FavouriteImages({ intialResources }: Props) {
  const [resources, setResources] = useState(intialResources);

  useEffect(() => {
    setResources(intialResources);
  }, [intialResources]);

  const onUnheart = (publicId: string) => {
    setResources((resources) => resources.filter(({ public_id }) => public_id !== publicId));
  };

  return (
    <ImageGrid>
      {resources.map(({ public_id, tags }) => (
        <CloudinaryImage key={public_id} src={public_id} tags={tags} onUnheart={onUnheart} />
      ))}
    </ImageGrid>
  );
}
