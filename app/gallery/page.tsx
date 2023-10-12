import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
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
    <PageLayout>
      <PageTitleLayout title="Gallery">
        <ImageUploader />
      </PageTitleLayout>
      <div className="space-y-4">
        <SearchForm />
        <GalleryImages intialResources={results.resources} />
      </div>
    </PageLayout>
  );
}
