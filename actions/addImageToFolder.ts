"use server";

import Cloudinary from "@/services/Cloudinary";

type AddImageToFolder = {
  album: string;
  public_id: string;
};

export async function addImageToFolder({ album, public_id }: AddImageToFolder) {
  await Cloudinary.createFolder(album);

  let parts = public_id.split("/");

  if (parts.length > 1) {
    parts = parts.slice(1);
  }

  const publicId = parts.join("/");

  const payload = {
    publicId: public_id,
    folderName: album,
    renamedPublicId: publicId,
  };

  await Cloudinary.renameImage(payload);
}
