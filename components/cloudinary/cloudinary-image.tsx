"use client";

import { CldImage } from "next-cloudinary";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";

import { setAsFavouriteAction } from "./actions/setAsFavouriteAction";

type Props = {
  src: string;
  tags: string[];
};

export default function Image({ src, tags }: Props) {
  const [_, setTransition] = useTransition();

  const isFavourite = tags.includes("favourite");

  return (
    <div className="relative">
      {isFavourite ? (
        <HeartFilledIcon
          className="absolute right-4 top-4 h-8 w-8 transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setTransition(async () => {
              await setAsFavouriteAction(src, false);
            });
          }}
        />
      ) : (
        <HeartIcon
          className="absolute right-4 top-4 h-8 w-8 transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            setTransition(async () => {
              await setAsFavouriteAction(src, true);
            });
          }}
        />
      )}
      <CldImage width={400} height={300} src={src} sizes="100vw" alt="an image of something" />
    </div>
  );
}
