import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import Cloudinary from "@/services/Cloudinary";

import ImageUploader from "@/components/cloudinary-image-uploader";
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

  const { resources } = await Cloudinary.getGalleryImages(searchQuery);

  return (
    <PageLayout>
      <PageTitleLayout title="Gallery">
        <ImageUploader />
      </PageTitleLayout>
      <SearchForm />
      <GalleryImages intialResources={resources} />
    </PageLayout>
  );
}
