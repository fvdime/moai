interface InputProps {
  placeholder: string,
  value?: string,
  type?: string,
  disabled?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({placeholder, value, type, disabled, onChange}: InputProps) => {
  return (
    <input 
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="w-full px-4 py-2 placeholder:text-xs text-sm border-2 border-zinc-700 bg-zinc-800 rounded-3xl text-zinc-100 outline-none transition"
    />
  )
}

export default Input