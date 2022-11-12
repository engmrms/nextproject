/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FieldValues, Path } from "react-hook-form";

import { SelectProps } from "../index.model";

// eslint-disable-next-line complexity
export function Select<TFormValues extends FieldValues>({
  options,
  title,
  required,
  selectText,
  register,
  name,
  valueProperty = "Id",
  textProperty = "Name",
  errors,
  getSelectedItem,
  ...rest
}: SelectProps<TFormValues>) {
  const attr = {
    id: name,
    ...(register && register(name.replaceAll("?", "") as Path<TFormValues>)),
    ...rest,
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
      <select {...attr} className={`block w-full ${errors?.[name] && "border-red-alert-100"} ${attr?.className}`}>
        {selectText && <option value="">{selectText}</option>}
        {options &&
          (options as { [valueProperty: string]: string | number }[])?.map(option => (
            <option key={option[valueProperty]} value={option[textProperty]}>
              {option[textProperty]}
            </option>
          ))}
      </select>
      {validation && <p className="mt-3 block text-1.4 text-red-alert-100">{validation?.message}</p>}
    </>
  );
}
