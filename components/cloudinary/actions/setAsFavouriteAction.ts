"use server";

import cloudinary from "cloudinary";

import { TAGS } from "@/constants/tags";

type SetAsFavouriteAction = {
  publicId: string;
  isFavourite?: boolean;
};

export const setAsFavouriteAction = ({ publicId, isFavourite }: SetAsFavouriteAction) => {
  if (isFavourite) {
    void cloudinary.v2.uploader.add_tag(TAGS.favourite, [publicId]);
  } else {
    void cloudinary.v2.uploader.remove_tag(TAGS.favourite, [publicId]);
  }
};
