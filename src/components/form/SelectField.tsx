import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  error?: string;
  options: { value: string | number; label: string }[];
}

export function SelectField({
  label,
  id,
  error,
  options,
  className = "",
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={`text-body font-medium ${error ? "text-red-500" : "text-col-label dark:text-col-dark-label"}`}
        >
          {label}
        </label>
        {error && (
          <span className="text-body text-red-500 font-medium" role="alert">
            {error}
          </span>
        )}
      </div>
      <div className="relative">
        <select
          id={id}
          aria-invalid={!!error}
          className={`
            form-input appearance-none pr-10 cursor-pointer
            ${error ? "error" : ""}
            ${className}
          `}
          {...rest}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-purple pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
