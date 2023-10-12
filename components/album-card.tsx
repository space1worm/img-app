import type { Folder } from "@/types";

import Link from "next/link";

import { ROUTES } from "@/utils/routes";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  folder: Folder;
};

export default function AlbumCard({ folder }: Props) {
  const { name } = folder;
  const link = `${ROUTES.albums}/${name}`;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>All your {name} images</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={link}>View album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
