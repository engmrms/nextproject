import { SessionProvider, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import React from "react";
import PortalLayout from "../Components/Layouts/Portal";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //console.log("app session", pageProps?.session);
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <PortalLayout>
            <Component {...pageProps} />
          </PortalLayout>
        </Auth>
      ) : (
        <PortalLayout>
          <Component {...pageProps} />
        </PortalLayout>
      )}
    </SessionProvider>
  );
}

export default MyApp;

function Auth({ children }: { children: React.ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
