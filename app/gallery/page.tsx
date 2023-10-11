import type { ImageSearchResult } from "@/types";
import cloudinary from "cloudinary";

import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";
import GalleryImages from "@/components/gallery-images";

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as ImageSearchResult;

  return (
    <div className="space-y-8 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <ImageUploader />
      </div>
      <GalleryImages intialResources={results.resources} />
    </div>
  );
}
