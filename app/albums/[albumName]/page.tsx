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

  return (
    <div className="space-y-8 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Album: {albumName}</h1>
      </div>
      <GalleryImages intialResources={results.resources} />
    </div>
  );
}
