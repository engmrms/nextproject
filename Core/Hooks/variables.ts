/* eslint-disable no-magic-numbers */
export const isBrowser = typeof window !== "undefined";

export const isNavigator = typeof navigator !== "undefined";

export const noop = () => {};

export const disableBrowserBack = () => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
};

export const handleEmptyData = (item: string | number | null | undefined) => item || "-";
