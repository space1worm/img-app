import type { ImageSearchResults } from "@/types";
import cloudinary from "cloudinary";

import { ROUTES } from "@/utils/routes";
import CloudinaryImages from "@/components/cld-images";
import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as ImageSearchResults;

  return (
    <div className="space-y-8 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <ImageUploader />
      </div>
      <CloudinaryImages resources={results.resources} pathToRevalidate={ROUTES.gallery} />
    </div>
  );
}
