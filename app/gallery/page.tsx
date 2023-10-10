import type { ImageResource } from "@/types";
import cloudinary from "cloudinary";

import CldImage from "@/components/cloudinary/cloudinary-image";
import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";

type SearchResults = {
  resources: ImageResource[];
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as SearchResults;

  return (
    <div className="space-y-8 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <ImageUploader />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {results.resources.map(({ public_id, tags }) => (
          <CldImage key={public_id} src={public_id} tags={tags} />
        ))}
      </div>
    </div>
  );
}
