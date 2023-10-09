"use client";

import { CldImage } from "next-cloudinary";
import { setAsFavouriteAction } from "./actions/setAsFavouriteAction";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";

type Props = {
  src: string;
  tags: string[];
};

export default function Image({ src, tags }: Props) {
  const [transition, setTransition] = useTransition();

  const isFavourite = tags.includes("favourite");

  return (
    <div className="relative">
      {isFavourite ? (
        <HeartFilledIcon
          className="absolute top-4 right-4 h-8 w-8 hover:cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => {
            setTransition(() => {
              setAsFavouriteAction(src, false);
            });
          }}
        />
      ) : (
        <HeartIcon
          className="absolute top-4 right-4 h-8 w-8 hover:cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => {
            setTransition(() => {
              setAsFavouriteAction(src, true);
            });
          }}
        />
      )}
      <CldImage
        width={400}
        height={300}
        src={src}
        sizes="100vw"
        alt="an image of something"
      />
    </div>
  );
}
