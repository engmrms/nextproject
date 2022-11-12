/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-eval */
import { ChangeEvent, useEffect, useRef } from "react";
import { FieldValues, Path } from "react-hook-form";

import { TextAreaProps } from "../index.model";

export function TextArea<TFormValues extends FieldValues>({ register, name, title, errors, required, ...rest }: TextAreaProps<TFormValues>) {
  const refTextArea = useRef<HTMLTextAreaElement | null>(null);
  if (!register) return;
  const { ref, onChange: regChnage, ...regRest } = register(name.replaceAll("?", "") as Path<TFormValues>);
  const handleHeight = () => {
    if (refTextArea.current !== null && refTextArea.current.scrollHeight) {
      refTextArea.current.style.height = "auto";
      refTextArea.current.style.height = `${refTextArea.current.scrollHeight}px`;
    }
  };
  let validation: { message: string } | null = null;
  try {
    validation = eval(`errors?.${name}`);
  } catch (e) {}
  const handleResize = (e: ChangeEvent) => {
    regChnage(e);
    handleHeight();
  };
  useEffect(() => {
    if (refTextArea?.current) handleHeight();
  }, [refTextArea?.current]);

  return (
    <>
      {title && (
        <label htmlFor={name} className="block">
          {title}
          {required && <span className="mr-4 text-red-700">*</span>}
        </label>
      )}
      <textarea
        id={name}
        ref={e => {
          ref(e);
          refTextArea.current = e;
        }}
        {...regRest}
        onChange={handleResize}
        className={`block w-full ${errors?.[name] && "border-red-alert-100"}`}
        {...rest}
      />
      {validation && <p className="mt-3 block text-1.4 text-red-alert-100">{validation?.message}</p>}
    </>
  );
}
