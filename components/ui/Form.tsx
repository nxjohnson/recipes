import React, { ChangeEventHandler } from "react";

interface InputProps {
  label?: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  name: string;
  required?: boolean;
  decimal?: number;
  register?: any;
}

interface SelectProps {
  label: string;
  register: any;
  options: string[];
  name: string;
  required?: boolean;
  onChange?: ChangeEventHandler
}

interface TextAreaProps {
  label: string;
  register: any;
  name: string;
  required?: boolean;
}

export function Input({
  label,
  type,
  placeholder = '',
  name,
  required = false,
  decimal = 1,
  register,
  ...rest
}: InputProps): JSX.Element {
  return (
    <label className="block w-full font-medium">
      {label}
      {required ?
      <span className="text-error">{' *'}</span> :
      <></>
      }
      <input
        className="form-input block mt-1 w-full font-normal"
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        {...rest}
        step={type === "number" ? decimal : undefined}
      />
    </label>
  );
}

export function Select({
  label,
  options,
  name,
  required = false,
  register,
  onChange,
  ...rest
}: SelectProps): JSX.Element {
  return (
    <label className="block font-medium">
      {label}
      {required ?
      <span className="text-error">{' *'}</span> :
      <></>
      }
      <select
        className="form-selct block mt-1 w-full font-normal"
        {...register(name, { onChange, required })}
        {...rest}
        defaultValue="none"
      >
        <option value="none" disabled hidden>
          Select an Option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextArea({
  label,
  name,
  required = false,
  register,
  ...rest
}: TextAreaProps): JSX.Element {
  return (
    <label className="block font-medium">
      {label}
      {required ?
      <span className="text-error">{' *'}</span> :
      <></>
      }
      <textarea
        className="form-textarea block mt-1 w-full font-normal"
        id={name}
        {...register(name, { required })}
        {...rest}
      />
    </label>
  );
}
