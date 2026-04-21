import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  rightLabel?: ReactNode;
}

export function FormField({
  label,
  id,
  error,
  hint,
  rightLabel,
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
        {rightLabel && (
          <span className="text-body text-red-500 font-medium">
            {rightLabel}
          </span>
        )}
        {error && !rightLabel && (
          <span
            className="text-body text-red-500 font-medium"
            role="alert"
            aria-live="polite"
          >
            {error}
          </span>
        )}
      </div>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={`form-input text-base ${error ? "error" : ""} ${className}`}
        {...rest}
      />
      {hint && !error && (
        <span
          id={`${id}-hint`}
          className="text-body text-col-label dark:text-col-dark-label text-xs"
        >
          {hint}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="sr-only" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
