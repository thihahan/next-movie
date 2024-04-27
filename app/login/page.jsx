"use client";
import LoginBtn from "@/components/LoginBtn";
import { useSession } from "next-auth/react";

export default function Login() {
  return <LoginBtn />;
}
