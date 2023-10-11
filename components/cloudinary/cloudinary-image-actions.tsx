"use client";

import type { ImageResource } from "@/types";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="bg-accent p-2 hover:bg-black">
            <EllipsisVerticalIcon className="h-7 w-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 space-y-2 p-2.5">
          <AddToAlbumDialog onClose={() => setOpen(false)} public_id={image.public_id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
