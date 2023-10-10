import type { ImageSearchResults } from "@/types";
import cloudinary from "cloudinary";

import { ROUTES } from "@/utils/routes";
import CloudinaryImages from "@/components/cld-images";

export default async function page() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as ImageSearchResults;

  return (
    <div className="space-y-8 px-6 py-8">
      <h1 className="text-2xl font-bold">Favourites</h1>
      <CloudinaryImages resources={results.resources} pathToRevalidate={ROUTES.favourites} />
    </div>
  );
}
