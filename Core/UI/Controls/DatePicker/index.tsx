/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import "./ar-sa";
import "./style.css";

import MomentUtils from "@date-io/moment";
import { DatePicker as MuiDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment from "moment";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import HijriUtilsExtended from "./HijriUtilsExtended";

export default function DatePicker({
  control,
  name,
  rules,
  title,
  errors,
  required,
  maxDate = "2076-11-26",
  minDate = "1937-03-14",
  defaultValue = null,
  ...rest
}) {
  const [locale, setLocale] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const hijriHandler = e => {
    setLocale(e.target.checked);
  };
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
      <Controller
        name={name}
        control={control}
        rules={rules} // optional
        defaultValue={defaultValue}
        render={({ field: { value = null, onChange } }) => (
          <>
            {locale && (
              <MuiPickersUtilsProvider utils={HijriUtilsExtended}>
                <MuiDatePicker
                  // openTo="year"
                  autoOk
                  inputVariant="outlined"
                  variant="inline"
                  open={isOpen}
                  onOpen={() => setIsOpen(true)}
                  onClose={() => setIsOpen(false)}
                  views={["year", "month", "date"]}
                  labelFunc={date => (date ? date.locale("en").format("iDD-iMM-iYYYY") : "")}
                  value={value || null}
                  className="w-full"
                  onChange={(date: MaterialUiPickersDate) => {
                    onChange(date?.format("YYYY-MM-DD"));
                  }}
                  minDate={minDate}
                  maxDate={maxDate}
                  maxDateMessage=""
                  minDateMessage=""
                  invalidDateMessage=""
                  error={errors?.[name]}
                  {...rest}
                />
              </MuiPickersUtilsProvider>
            )}
            {!locale && (
              <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <MuiDatePicker
                  autoOk
                  inputVariant="outlined"
                  variant="inline"
                  open={isOpen}
                  onOpen={() => setIsOpen(true)}
                  onClose={() => setIsOpen(false)}
                  views={["year", "month", "date"]}
                  labelFunc={date => (date ? date.locale("en").format("DD-MM-YYYY") : "")}
                  value={value || null}
                  className={`w-full ${rest.disabled && "bg-gray-300"}`}
                  onChange={(date: MaterialUiPickersDate) => {
                    onChange(date?.format("YYYY-MM-DD"));
                  }}
                  minDate={minDate}
                  maxDate={maxDate}
                  maxDateMessage=""
                  minDateMessage=""
                  invalidDateMessage=""
                  error={errors?.[name]}
                  {...rest}
                />
              </MuiPickersUtilsProvider>
            )}
            {!rest.disabled && (
              <div className="mt-3 flex justify-between">
                <label className="ml-3 flex items-center">
                  <input type="checkbox" className="form-checkbox" onClick={hijriHandler} />
                  <span className="mr-4 whitespace-nowrap">التاريخ الهجري</span>
                </label>
                {validation && <p className=" block text-1.4 text-red-alert-100">{validation?.message}</p>}
              </div>
            )}
          </>
        )}
      />
    </>
  );
}
