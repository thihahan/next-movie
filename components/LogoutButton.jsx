"use client";
import { signOut } from "next-auth/react";
import { MenubarItem } from "./ui/menubar";

export default function LogoutButton({}) {
  return (
    <MenubarItem>
      <button onClick={() => signOut()}>log out</button>
    </MenubarItem>
  );
}
