import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import Cloudinary from "@/services/Cloudinary";

import FavouriteImages from "@/components/favourite-images";

export const dynamic = "force-dynamic";

export default async function FavouritesPage() {
  const { resources } = await Cloudinary.getFavouriteImages();

  return (
    <PageLayout>
      <PageTitleLayout title="Favourites" />
      <FavouriteImages intialResources={resources} />
    </PageLayout>
  );
}
