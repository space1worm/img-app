"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/utils/routes";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SearchForm() {
  const router = useRouter();
  const [tagName, setTagName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tagName) {
      router.replace(`${ROUTES.gallery}?search=${encodeURIComponent(tagName)}`);
      router.refresh();
    } else {
      router.replace(ROUTES.gallery);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <Label htmlFor="search-by-tag" className="text-right text-2xl">
        Search by tag
      </Label>
      <div className="flex items-center gap-2">
        <Input
          id="search-by-tag"
          placeholder="ex: favourite"
          onChange={(e) => setTagName(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
