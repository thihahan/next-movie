"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function GenreButton({ genre }) {
  const pathname = usePathname();
  return (
    <Button
      variant={
        pathname == `/genres/${genre.name}/${genre.id}` ? "secondary" : "ghost"
      }
      className="w-full justify-start"
    >
      {genre.name}
    </Button>
  );
}
