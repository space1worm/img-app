import { useState, type ChangeEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addImageToFolder } from "../actions/addImageToFolder";

type Props = {
  public_id: string;
  onClose: () => void;
};

export default function AddToAlbumDialog({ onClose, public_id }: Props) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);

  const handleImageMoveToAlbum = async () => {
    onClose();
    setOpen(false);
    await addImageToFolder({ album: albumName.toLowerCase(), public_id });
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(prevState) => {
        if (!prevState) {
          onClose();
        }
        setOpen(prevState);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2">
          Add Photo to album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>Type an album you want to move this image into.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album" className="text-right">
              Album
            </Label>
            <Input
              id="album"
              type="text"
              value={albumName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAlbumName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleImageMoveToAlbum} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
