import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IFormHooks<TFormValues extends FieldValues> {
  register: UseFormRegister<TFormValues> | null;
}

export interface TextFieldProps<TFormValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  type?: "text" | "number" | "password" | "hidden";
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface CheckFieldProps<TFormValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  type?: "radio" | "checkbox";
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface TextAreaProps<TFormValues extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface SelectProps<TFormValues extends FieldValues> extends SelectHTMLAttributes<HTMLSelectElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  options: any;
  selectText: string;
  valueProperty?: string;
  textProperty?: string;
  required?: boolean;
  title?: string;
  getSelectedItem?: (option: any) => any;
  errors: {
    [x: string]: any;
  };
}
