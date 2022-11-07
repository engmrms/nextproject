/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import { Controller } from "react-hook-form";
import OtpInput from "react-otp-input";

export default function OTPInput({ control, name, title, errors, required, isError, ...rest }) {
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
      <div className="w-[308px]">
        <Controller
          name={name}
          control={control}
          {...rest}
          render={({ field: { value = null, onChange } }) => (
            <OtpInput
              shouldAutoFocus
              inputStyle={{
                width: "61px",
                height: "61px",
                fontSize: "xx-large",
                margin: "10px",
                borderColor: isError ? "#EE5253" : "#BDC3C7",
                color: isError ? "#EE5253" : "#000",
              }}
              containerStyle={{ direction: "ltr" }}
              value={value}
              onChange={val => {
                onChange(val);
              }}
              numInputs={4}
              errorStyle={{ borderColor: "red" }}
              {...rest}
            />
          )}
        />
        {validation && <p className="mt-3 block text-1.4 text-red-alert-100">{validation?.message}</p>}
      </div>
    </>
  );
}
