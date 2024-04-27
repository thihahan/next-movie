"use client";
import { signIn } from "next-auth/react";
import { MenubarItem } from "./ui/menubar";

export default function SignInButton() {
  return (
    <MenubarItem>
      <button onClick={() => signIn()}>Sign in</button>
    </MenubarItem>
  );
}
