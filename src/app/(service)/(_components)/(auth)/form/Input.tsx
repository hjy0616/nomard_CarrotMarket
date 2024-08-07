import { InputHTMLAttributes } from "react";

interface FormInputProps {
  name: string;
  errors?: string[];
}
export default function Input({
  name,
  errors = [],
  ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none transition px-2 placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((e, i) => (
        <span key={i} className="text-red-500 font-medium">
          {e}
        </span>
      ))}
    </div>
  );
}
