import type { FoldersSearchResult } from "@/types";
import cloudinary from "cloudinary";

import CloudinaryAlbumCard from "@/components/cloudinary/cloudinary-album-card";

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as FoldersSearchResult;

  return (
    <div className="space-y-8 px-6 py-8">
      <h1 className="text-2xl font-bold">Albums</h1>
      <div className="grid grid-cols-3 gap-4">
        {folders.map((folder) => (
          <CloudinaryAlbumCard folder={folder} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}