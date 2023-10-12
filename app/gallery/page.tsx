import type { ImageSearchResult } from "@/types";
import cloudinary from "cloudinary";

import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";
import GalleryImages from "@/components/gallery-images";
import SearchForm from "@/components/search-form";

type Props = {
  searchParams: {
    search: string;
  };
};

export default async function GalleryPage({ searchParams }: Props) {
  const { search } = searchParams;

  const searchQuery = `resource_type:image${search ? ` AND tags=${search}` : ""}`;

  const results = (await cloudinary.v2.search
    .expression(searchQuery)
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
      <SearchForm />
      <GalleryImages intialResources={results.resources} />
    </div>
  );
}
