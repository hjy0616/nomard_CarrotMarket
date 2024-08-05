interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}
export default function FormInput({
  type,
  name,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none transition px-2 placeholder:text-neutral-400"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((e, i) => (
        <span key={i} className="text-red-500 font-medium">
          {e}
        </span>
      ))}
    </div>
  );
}
