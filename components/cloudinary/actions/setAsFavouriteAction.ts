"use server";

import { ROUTES } from "@/utils/routes";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const setAsFavouriteAction = async (
  public_id: string,
  isFavourite?: boolean
) => {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [public_id]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [public_id]);
  }

  //TODO fix this hack later, sync issue with cloudinary. use useOptimistic instead..
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath(ROUTES.gallery);
};
