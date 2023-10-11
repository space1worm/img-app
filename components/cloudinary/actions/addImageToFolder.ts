"use server";

import cloudinary from "cloudinary";

type AddImageToFolder = {
  album: string;
  public_id: string;
};

export async function addImageToFolder({ album, public_id }: AddImageToFolder) {
  await cloudinary.v2.api.create_folder(album);

  let parts = public_id.split("/");

  if (parts.length > 1) {
    parts = parts.slice(1);
  }

  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(public_id, `${album}/${publicId}`);
}
