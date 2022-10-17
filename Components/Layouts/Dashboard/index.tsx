import Head from "next/head";
import React from "react";
interface IProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    name?: string;
    description?: string;
    icon?: string;
  };
}
function DashboardLayout({ children, meta }: IProps) {
  const { title, name, description, icon } = meta || {};
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      {children}
    </>
  );
}

export default DashboardLayout;
