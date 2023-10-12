import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
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
    <PageLayout>
      <PageTitleLayout title="Favourites" />
      <FavouriteImages intialResources={results.resources} />
    </PageLayout>
  );
}
