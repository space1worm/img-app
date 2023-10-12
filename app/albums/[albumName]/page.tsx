import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import Cloudinary from "@/services/Cloudinary";

import GalleryImages from "@/components/gallery-images";

type Props = {
  params: {
    albumName: string;
  };
};

export default async function AlbumPage({ params: { albumName } }: Props) {
  const { resources } = await Cloudinary.getFolderImages(albumName);
  const title = `Album ${albumName}`;

  return (
    <PageLayout>
      <PageTitleLayout title={title} />
      <GalleryImages intialResources={resources} />
    </PageLayout>
  );
}
