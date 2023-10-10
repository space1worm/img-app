"use client";

import { CldImage } from "next-cloudinary";
import { useTransition } from "react";

import Icons from "@/utils/Icons";

import { setAsFavouriteAction } from "./actions/setAsFavouriteAction";

type Props = {
  src: string;
  tags: string[];
  pathToRevalidate: string;
};

export default function CloudinaryImage({ src, tags, pathToRevalidate }: Props) {
  const [_, setTransition] = useTransition();

  const isFavourite = tags.includes("favourite");

  return (
    <div className="relative">
      {isFavourite ? (
        <Icons.HeartFilledIcon
          className="absolute right-4 top-4 h-8 w-8 transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setTransition(async () => {
              await setAsFavouriteAction({
                publicId: src,
                isFavourite: false,
                pathToRevalidate: pathToRevalidate,
              });
            });
          }}
        />
      ) : (
        <Icons.HeartIcon
          className="absolute right-4 top-4 h-8 w-8 transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setTransition(async () => {
              await setAsFavouriteAction({
                publicId: src,
                isFavourite: true,
                pathToRevalidate: pathToRevalidate,
              });
            });
          }}
        />
      )}
      <CldImage width={400} height={300} src={src} sizes="100vw" alt="an image of something" />
    </div>
  );
}
