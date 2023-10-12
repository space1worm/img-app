import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import type { ImageSearchResult } from "@/types";
import cloudinary from "cloudinary";

import GalleryImages from "@/components/gallery-images";

type Props = {
  params: {
    albumName: string;
  };
};

export default async function AlbumPage({ params: { albumName } }: Props) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as ImageSearchResult;

  const albName = `Album ${albumName}`;

  return (
    <PageLayout>
      <PageTitleLayout title={albName} />
      <GalleryImages intialResources={results.resources} />
    </PageLayout>
  );
}
