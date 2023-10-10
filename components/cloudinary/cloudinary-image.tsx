"use client";

import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";

import Icons from "@/utils/Icons";
import { TAGS } from "@/constants/tags";

import { setAsFavouriteAction } from "./actions/setAsFavouriteAction";

type Props = {
  src: string;
  tags: string[];
  onUnheart?: (publicId: string) => void;
};

export default function CloudinaryImage({ src, tags, onUnheart }: Props) {
  const [_, setTransition] = useTransition();
  const [isFavourite, setIsFavourite] = useState(tags.includes(TAGS.favourite));

  return (
    <div className="relative">
      {isFavourite ? (
        <Icons.HeartFilledIcon
          className="absolute right-4 top-4 h-8 w-8 text-white transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setIsFavourite(false);
            onUnheart && onUnheart(src);
            setTransition(() => {
              void setAsFavouriteAction({
                publicId: src,
                isFavourite: false,
              });
            });
          }}
        />
      ) : (
        <Icons.HeartIcon
          className="absolute right-4 top-4 h-8 w-8 text-white transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setIsFavourite(true);
            setTransition(() => {
              void setAsFavouriteAction({
                publicId: src,
                isFavourite: true,
              });
            });
          }}
        />
      )}
      <CldImage
        className="rounded-xl"
        width={400}
        height={300}
        src={src}
        sizes="100vw"
        alt="an image of something"
      />
    </div>
  );
}
