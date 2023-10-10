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

export default function AddToAlbumDialog() {
  const [albumName, setAlbumName] = useState("");

  return (
    <Dialog>
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
