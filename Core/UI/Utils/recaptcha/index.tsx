import React, { Fragment, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface IRecaptcha {
  validateCaptcha: (isVaild: boolean) => void;
}

function Recaptcha({ validateCaptcha }: IRecaptcha) {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const CapatchaChange = value => {
    if (value) validateCaptcha(true);
    else validateCaptcha(false);
  };
  captchaRef.current?.reset();

  return <ReCAPTCHA ref={captchaRef} sitekey={`${import.meta.env.VITE_CAPTCHA_KEY}`} size="normal" onChange={CapatchaChange} hl="ar" />;
}

export default Recaptcha;
