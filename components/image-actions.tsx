"use client";

import type { ImageResource } from "@/types";

import Link from "next/link";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { ROUTES } from "@/utils/routes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AddToAlbumDialog from "./add-to-album-dialog";

type Props = {
  image: ImageResource;
  className?: string;
};

export default function ImageActions({ className, image }: Props) {
  const [open, setOpen] = useState(false);

  const publidId = image.public_id;
  const editLink = `${ROUTES.edit}?publicId=${encodeURIComponent(publidId)}`;

  return (
    <div className={className}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="bg-accent p-2 hover:bg-black">
            <EllipsisVerticalIcon className="h-7 w-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 space-y-2 p-2.5">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog onClose={() => setOpen(false)} public_id={publidId} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href={editLink}>Edit Photo</Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
