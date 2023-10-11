import type { ImageSearchResult } from "@/types";
import cloudinary from "cloudinary";

import FavouriteImages from "@/components/favourite-images";

export default async function FavouritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as ImageSearchResult;

  return (
    <div className="space-y-8 px-6 py-8">
      <h1 className="text-2xl font-bold">Favourites</h1>
      <FavouriteImages intialResources={results.resources} />
    </div>
  );
}
