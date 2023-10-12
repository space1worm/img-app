"use server";

import Cloudinary from "@/services/Cloudinary";

type SetAsFavouriteAction = {
  publicId: string;
  isFavourite?: boolean;
};

export const setAsFavouriteAction = ({ publicId, isFavourite }: SetAsFavouriteAction) => {
  isFavourite ? void Cloudinary.addTag(publicId) : void Cloudinary.removeTag(publicId);
};
