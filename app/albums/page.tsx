import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import Cloudinary from "@/services/Cloudinary";

import CloudinaryAlbumCard from "@/components/cloudinary/cloudinary-album-card";

export default async function AlbumsPage() {
  const { folders } = await Cloudinary.getFolders();

  return (
    <PageLayout>
      <PageTitleLayout title="Albums" />
      <div className="grid grid-cols-3 gap-4">
        {folders.map((folder) => (
          <CloudinaryAlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </PageLayout>
  );
}
