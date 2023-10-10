"use server";

import cloudinary from "cloudinary";

import { revalidatePath } from "next/cache";

type SetAsFavouriteAction = {
  publicId: string;
  pathToRevalidate: string;
  isFavourite?: boolean;
};

export const setAsFavouriteAction = async ({
  publicId,
  pathToRevalidate,
  isFavourite,
}: SetAsFavouriteAction) => {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }

  //TODO fix this hack later, sync issue with cloudinary. use useOptimistic instead..
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath(pathToRevalidate);
};
