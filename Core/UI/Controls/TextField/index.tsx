/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable complexity */
import React from "react";
import { Path } from "react-hook-form";

import { TextFieldProps } from "../index.model";

type TextFieldCustomProps<T> = TextFieldProps<T> & {
  redirect?: React.ReactNode;
};

export function TextField<TFormValues>({
  register,
  name,
  title,
  required,
  errors,
  type = "text",
  redirect,
  ...rest
}: TextFieldCustomProps<TFormValues>) {
  // eslint-disable-next-line prefer-const
  let validation: { message: string } | null = null;
  try {
    validation = eval(`errors?.${name}`);
  } catch (e) {}
  return (
    <>
      {title && (
        <label htmlFor={name} className="block">
          {title}
          {required && <span className="mr-4 text-red-700">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        {...(register && register(name.replaceAll("?", "") as Path<TFormValues>))}
        className={`block w-full ${errors?.[name] ? "border-red-500" : "border-gray-500"} ${rest.disabled && "bg-gray-300"}`}
        {...rest}
      />
      {validation && (
        <p className="mt-3 block text-1.4 text-red-500">
          {validation?.message} {redirect}
        </p>
      )}
    </>
  );
}
