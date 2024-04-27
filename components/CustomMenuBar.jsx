import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarGroup } from "@radix-ui/react-menubar";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import SignInButton from "./SignInButton";
export default async function CustomMenuBar() {
  const session = await getServerSession(authOptions);
  return (
    <Menubar>
      <MenubarMenu>
        {session ? (
          <MenubarTrigger>{session?.user.name}</MenubarTrigger>
        ) : (
          <MenubarTrigger>Sign Up</MenubarTrigger>
        )}
        <MenubarContent>
          {session ? (
            <>
              <div className="flex">
                <MenubarItem>
                  <img
                    width={35}
                    className="rounded-full"
                    src={session?.user.image}
                    alt=""
                  />
                </MenubarItem>
                <MenubarItem>{session?.user?.email}</MenubarItem>
              </div>
              <MenubarSeparator />
              <MenubarItem>watch list</MenubarItem>
              <LogoutButton />
            </>
          ) : (
            <>
              <MenubarItem>Sign up</MenubarItem>
              <SignInButton />
            </>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
