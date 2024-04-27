import { SessionProvider } from "next-auth/react";

export default function CustomSessionProvider({
  children,
  pageProps: { session, ...pageProps },
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
