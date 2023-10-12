import type { FoldersSearchResult, ImageSearchResult } from "@/types";
import cloudinary from "cloudinary";

import { TAGS } from "@/constants/tags";

type RenameImage = {
  folderName: string;
  publicId: string;
  renamedPublicId: string;
};

class Cloudinary {
  private static instance: Cloudinary;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): Cloudinary {
    if (!Cloudinary.instance) {
      Cloudinary.instance = new Cloudinary();
    }

    return Cloudinary.instance;
  }

  async getGalleryImages(query: string, maxResult = 20): Promise<ImageSearchResult> {
    return (await cloudinary.v2.search
      .expression(query)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(maxResult)
      .execute()) as ImageSearchResult;
  }

  async getFavouriteImages(maxResult = 20): Promise<ImageSearchResult> {
    return (await cloudinary.v2.search
      .expression("resource_type:image AND tags=favourite")
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(maxResult)
      .execute()) as ImageSearchResult;
  }

  async getFolders(): Promise<FoldersSearchResult> {
    return (await cloudinary.v2.api.root_folders()) as FoldersSearchResult;
  }

  async getFolderImages(folderName: string, maxResult = 20): Promise<ImageSearchResult> {
    return (await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${folderName}`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(maxResult)
      .execute()) as ImageSearchResult;
  }

  async createFolder(folderName: string): Promise<void> {
    await cloudinary.v2.api.create_folder(folderName);
  }

  async renameImage({ publicId, folderName, renamedPublicId }: RenameImage): Promise<void> {
    await cloudinary.v2.uploader.rename(publicId, `${folderName}/${renamedPublicId}`);
  }

  async addTag(publicId: string) {
    void cloudinary.v2.uploader.add_tag(TAGS.favourite, [publicId]);
  }

  async removeTag(publicId: string) {
    void cloudinary.v2.uploader.remove_tag(TAGS.favourite, [publicId]);
  }
}

export default Cloudinary.getInstance();
