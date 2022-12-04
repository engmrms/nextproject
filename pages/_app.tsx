import { NextPage } from "next";
import { SessionProvider, useSession } from "next-auth/react";
import React, { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import ToastContainer from "../context/toast/ToastContainer";
import { ToastProvider } from "../context/toast/ToastContext";

import "../styles/globals.css";

type AppProps = {
  Component: NextPage & {
    auth: boolean;
    getLayout: (
      page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined
    ) => React.ReactNode;
  };
  pageProps: {} & { session: any };
};

function Auth({ children }: { children: any }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //console.log("app session", pageProps?.session);

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <ToastProvider>
      <SessionProvider session={session}>
        {Component.auth ? <Auth>{getLayout(<Component {...pageProps} />)}</Auth> : getLayout(<Component {...pageProps} />)}
        {/* {Component.auth ? (
        <Auth>
          {Component.resetLayout ? (
            <Component {...pageProps} />
          ) : (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          )}
        </Auth>
      ) : Component.resetLayout ? (
        <Component {...pageProps} />
      ) : (
        <PortalLayout>
          <Component {...pageProps} />
        </PortalLayout>
      )} */}
      </SessionProvider>
      <ToastContainer />
    </ToastProvider>
  );
}

export default MyApp;
