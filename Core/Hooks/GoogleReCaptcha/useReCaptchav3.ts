/* eslint-disable react-hooks/exhaustive-deps */
// https://developers.google.com/recaptcha/docs/v3
import * as React from "react";

import { getProjectWindow, injectScript, removeScript } from "./htmlDom";

const ERROR_SCRIPT_NOT_AVAILABLE = "Google recaptcha is not available";
const ERROR_NOT_A_WEB_BROWSER = "Running outside a web browser";

const GOOGLE_RECAPTCHA_V3_SCRIPT = "https://www.google.com/recaptcha/api.js";
const SCRIPT_ID = "google-recaptcha-v3";
const GOOGLE_RECAPTCHA_BADGE_CLASSNAME = ".grecaptcha-badge";

interface IGoogleReCaptchaOptions {
  siteKey: string;
  language?: string;
  loadOnStart?: boolean;
  action?: string;
}

interface IGoogleReCaptchaV3HookReturn {
  reCaptchaResponseToken?: string;
  executeReCaptcha: (action?: string) => Promise<string>;
}

type TGoogleReCaptchaV3Hook = (options: IGoogleReCaptchaOptions) => IGoogleReCaptchaV3HookReturn;

export const useGoogleReCaptchaV3: TGoogleReCaptchaV3Hook = ({ siteKey, language, loadOnStart = false, action }) => {
  const [responseToken, setResponseToken] = React.useState<string>();

  const executeReCaptcha = React.useCallback(async (): Promise<string> => {
    const window = getProjectWindow();
    if (!window) {
      throw new Error(ERROR_NOT_A_WEB_BROWSER);
    }

    const { grecaptcha } = window;
    if (!grecaptcha) {
      throw new Error(ERROR_SCRIPT_NOT_AVAILABLE);
    }

    return new Promise(resolve => {
      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action: action || "" }).then(token => resolve(token));
      });
    });
  }, [action, siteKey]);

  const removeGReCaptchaDivElement = () => {
    const window = getProjectWindow();
    if (!window) {
      return;
    }

    const element = window.document.querySelector(GOOGLE_RECAPTCHA_BADGE_CLASSNAME);
    if (element && element.parentElement) {
      element.parentElement.remove();
    }
  };

  const onLoadInjectedScript = async () => {
    if (!loadOnStart) {
      return;
    }

    try {
      const token = await executeReCaptcha();
      setResponseToken(token);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    if (!siteKey) {
      return;
    }

    const window = getProjectWindow();
    if (window) {
      const scriptTag = window.document.getElementById(SCRIPT_ID);
      if (!scriptTag) {
        injectScript(SCRIPT_ID, `${GOOGLE_RECAPTCHA_V3_SCRIPT}?render=${siteKey}${language ? `&hl=${language}` : ""}`, onLoadInjectedScript);
      }
    }

    return () => {
      removeScript(SCRIPT_ID);
      removeGReCaptchaDivElement();
    };
  }, [siteKey, language]);

  return { executeReCaptcha, reCaptchaResponseToken: responseToken };
};

export default useGoogleReCaptchaV3;
