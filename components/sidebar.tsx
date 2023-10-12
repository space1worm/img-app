import Link from "next/link";

import Icons from "@/utils/Icons";
import { ROUTES } from "@/utils/routes";
import { cn } from "@/utils/utils";

import { Button } from "./ui/button";

const LINKS = [
  {
    label: "Gallery",
    link: ROUTES.gallery,
    Icon: Icons.RectangleGroupIcon,
  },
  {
    label: "Favourites",
    link: ROUTES.favourites,
    Icon: Icons.BookmarkIcon,
  },
  {
    label: "Albums",
    link: ROUTES.albums,
    Icon: Icons.FolderIcon,
  },
];

const Links = LINKS.map(({ label, link, Icon }) => {
  return (
    <Link key={label} href={link}>
      <Button variant="ghost" className="w-full justify-start">
        <Icon className="h-6 w-6" />
        <span className="ml-2">{label}</span>
      </Button>
    </Link>
  );
});

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("min-h-screen border-r-[0.2px] border-gray-50 pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage</h2>
          <div className="flex flex-col gap-1">{Links}</div>
        </div>
      </div>
    </div>
  );
}
