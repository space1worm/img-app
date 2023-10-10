import type { ImageResource } from "@/types";

import CloudinaryImage from "./cloudinary/cloudinary-image";

type Props = {
  resources: ImageResource[];
  pathToRevalidate: string;
};

export default function CloudinaryImages({ resources, pathToRevalidate }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {resources.map(({ public_id, tags }) => (
        <CloudinaryImage
          key={public_id}
          src={public_id}
          tags={tags}
          pathToRevalidate={pathToRevalidate}
        />
      ))}
    </div>
  );
}
