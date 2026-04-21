import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "danger" | "ghost" | "dark";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const styles: Record<Variant, string> = {
  primary: "bg-purple text-white hover:bg-purple-hover",

  secondary:
    "bg-[#F9FAFE] dark:bg-col-dark-ele text-col-label dark:text-col-dark-muted hover:bg-col-border dark:hover:bg-[#DFE3FA] dark:hover:text-col-text",

  danger: "bg-[#EC5757] text-white hover:bg-[#FF9797]",

  ghost:
    "bg-transparent text-col-label dark:text-col-dark-muted hover:text-col-text dark:hover:text-white",

  dark: "bg-[#373B53] dark:bg-col-dark-ele text-col-muted dark:text-col-dark-muted hover:bg-col-text dark:hover:bg-[#0C0E16] hover:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-4 rounded-full
        font-bold text-[0.813rem] leading-[1.375rem] tracking-[-0.01rem]
        transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
