import React from "react";

export const PageLoader = () => (
  <div className="fixed  top-0 left-0 z-[1000] flex h-full w-full items-center justify-center opacity-70">
    <div className="z-[1001] block h-60 w-60 animate-spin rounded-[50%] border-[3px] border-solid border-[transparent] border-t-carmine before:absolute before:top-2 before:right-2 before:left-2 before:bottom-2 before:animate-spin before:rounded-[50%] before:border-[3px] before:border-solid before:border-[transparent] before:border-t-cambridge after:absolute after:top-6 after:right-6 after:left-6 after:bottom-6 after:animate-spin after:rounded-[50%] after:border-[3px] after:border-solid after:border-[transparent] after:border-t-orange" />
  </div>
);
