interface InputProps {
  label: string,
  type: string,
  placeholder: string,
  register: any,
  name: string,
}

interface SelectProps {
  label: string,
  register: any,
  options: string[],
  name: string,
}

interface TextAreaProps {
  label: string,
  register: any,
  name: string,
}


export function Input({ label, type, placeholder, register, name, ...rest }: InputProps): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} {...register(name)} {...rest} />
    </>
  )
}

export function Select({ label, register, options, name, ...rest }: SelectProps): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select {...register(name)} {...rest} defaultValue="none">
        <option value="none" disabled hidden>Select an Option</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export function TextArea({ label, register, name, ...rest }: TextAreaProps): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...register(name)} {...rest} />
    </>
  )
}