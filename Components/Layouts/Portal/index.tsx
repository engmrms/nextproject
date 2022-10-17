import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
interface IProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    name?: string;
    description?: string;
    icon?: string;
  };
}

function PortalLayout({ children, meta }: IProps) {
  const { title, name, description, icon } = meta || {};
  return (
    <>
      <Head>
        <title>{title ? title : "Next Project"}</title>
        <meta name={name} content={description} />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default PortalLayout;
