export const isBrowser = typeof window !== "undefined";

export interface IGoogleReCaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options?: { action: string }) => Promise<string>;
}

export interface IProjectWindow extends Window {
  grecaptcha: IGoogleReCaptcha;
}

export const getProjectWindow = () => (isBrowser ? (window as unknown as IProjectWindow) : undefined);

export const getHeadTag = () => {
  const window = getProjectWindow();
  if (window) {
    return window.document.getElementsByTagName("head")[0];
  }
  return undefined;
};

export const injectScript = (id: string, src: string, onload?: () => void): boolean => {
  const window = getProjectWindow();

  const headTag = getHeadTag();
  if (!headTag || !window) return false;
  const scriptTag = window.document.createElement("script");
  scriptTag.id = id;
  scriptTag.src = src;

  if (onload) {
    scriptTag.onload = onload;
  }

  if ("async" in scriptTag) {
    scriptTag.async = true;
  }

  if ("defer" in scriptTag) {
    scriptTag.defer = true;
  }
  headTag.appendChild(scriptTag);
  return true;
};

export const removeScript = (id: string) => {
  const window = getProjectWindow();
  if (window) {
    const scriptTag = window.document.getElementById(id);
    if (scriptTag) {
      scriptTag.remove();
      return true;
    }
  }
  return false;
};
