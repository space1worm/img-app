"use client";

import type { ImageResource } from "@/types";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AddToAlbumDialog from "../add-to-album-dialog";

type Props = {
  image: ImageResource;
  className?: string;
};

export default function CloudinaryImageActions({ className, image }: Props) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="bg-accent p-2 hover:bg-black">
            <EllipsisVerticalIcon className="h-7 w-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 space-y-2 p-2.5">
          <AddToAlbumDialog public_id={image.public_id} />
          <AddToAlbumDialog public_id={image.public_id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
