"use client";

import ImageGrid from "@/layout/images-layouts";
import type { ImageResource } from "@/types";

import { useEffect, useState } from "react";

import CloudinaryImage from "./cloudinary-image";

type Props = {
  intialResources: ImageResource[];
};

export default function GalleryImages({ intialResources }: Props) {
  const [resources, setResources] = useState(intialResources);

  useEffect(() => {
    setResources(intialResources);
  }, [intialResources]);

  return (
    <ImageGrid>
      {resources.map(({ public_id, tags }) => (
        <CloudinaryImage key={public_id} src={public_id} tags={tags} />
      ))}
    </ImageGrid>
  );
}
