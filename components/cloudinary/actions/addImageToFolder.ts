"use server";

import cloudinary from "cloudinary";

type AddImageToFolder = {
  folder: string;
  public_id: string;
};

export async function addImageToFolder({ folder, public_id }: AddImageToFolder) {
  await cloudinary.v2.api.create_folder(folder);
  await cloudinary.v2.uploader.rename(public_id, `${folder}/${public_id}`);
}
