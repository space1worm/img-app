import Link from "next/link";

import { ROUTES } from "@/utils/routes";
import ThemeSwitcher from "@/components/theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TopNavigation() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href={ROUTES.home}>
          <h1 className="pl-3 text-4xl font-bold">Photos App</h1>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitcher />
          <Link href="https://github.com/space1worm" target="_blank">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@Sw" />
              <AvatarFallback>Space1worm</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
}
