/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable complexity */
import React from "react";
import { Path } from "react-hook-form";

import { CheckFieldProps } from "../index.model";

export function CheckField<TFormValues>({
  register,
  name,
  type = "radio",
  title,
  required,
  errors,
  className,
  checked,
  ...rest
}: CheckFieldProps<TFormValues>) {
  let validation: { message: string } | null = null;
  try {
    // eslint-disable-next-line no-eval
    validation = eval(`errors?.${name}`);
  } catch (e) {}

  return (
    <label className="flex items-center">
      <input
        type={type}
        id={name}
        // eslint-disable-next-line no-undef
        {...(register && register(name.replaceAll("?", "") as Path<TFormValues>))}
        className={`form-${type} ${className} ${errors?.method && "border-red-alert-100"}`}
        defaultChecked={checked}
        {...rest}
      />
      <span className="mr-4">{title}</span>
    </label>
  );
}
