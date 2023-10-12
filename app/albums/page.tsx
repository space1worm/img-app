import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";
import type { FoldersSearchResult } from "@/types";
import cloudinary from "cloudinary";

import CloudinaryAlbumCard from "@/components/cloudinary/cloudinary-album-card";

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as FoldersSearchResult;

  return (
    <PageLayout>
      <PageTitleLayout title="Albums" />
      <div className="grid grid-cols-3 gap-4">
        {folders.map((folder) => (
          <CloudinaryAlbumCard folder={folder} key={Math.random()} />
        ))}
      </div>
    </PageLayout>
  );
}
