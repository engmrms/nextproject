import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormHooks<TFormValues> {
  register: UseFormRegister<TFormValues> | null;
}

export interface TextFieldProps<TFormValues> extends InputHTMLAttributes<HTMLInputElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  type?: "text" | "number" | "password" | "hidden";
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface CheckFieldProps<TFormValues> extends InputHTMLAttributes<HTMLInputElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  type?: "radio" | "checkbox";
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface TextAreaProps<TFormValues> extends TextareaHTMLAttributes<HTMLTextAreaElement>, IFormHooks<TFormValues> {
  name: Path<TFormValues> | string;
  title?: string;
  required?: boolean;
  errors: {
    [x: string]: any;
  };
}

export interface SelectProps<TFormValues> extends SelectHTMLAttributes<HTMLSelectElement>, IFormHooks<TFormValues> {
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
