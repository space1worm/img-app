"use client";

import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";

import { setAsFavouriteAction } from "@/actions/setAsFavouriteAction";
import { TAGS } from "@/constants/tags";
import ImageActions from "@/components/image-actions";

import Heart from "./heart";

type Props = {
  src: string;
  tags: string[];
  onUnheart?: (publicId: string) => void;
};

export default function CloudinaryImage({ src, tags, onUnheart }: Props) {
  const [_, setTransition] = useTransition();
  const [isFavourite, setIsFavourite] = useState(tags.includes(TAGS.favourite));

  const handleHeart = () => {
    setIsFavourite(true);
    setTransition(() => {
      void setAsFavouriteAction({
        publicId: src,
        isFavourite: true,
      });
    });
  };

  const handleUnheart = () => {
    setIsFavourite(false);
    onUnheart && onUnheart(src);
    setTransition(() => {
      void setAsFavouriteAction({
        publicId: src,
        isFavourite: false,
      });
    });
  };

  return (
    <div className="relative">
      <div className="absolute flex w-full justify-between p-2">
        <Heart isFavourite={isFavourite} handleHeart={handleHeart} handleUnheart={handleUnheart} />
        <ImageActions image={{ public_id: src, tags }} />
      </div>
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
