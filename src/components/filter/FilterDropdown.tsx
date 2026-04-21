import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useInvoices } from "@/context/invoice/useInvoices";
import type { FilterStatus, InvoiceStatus } from "@/types/invoice";

const OPTIONS: { value: FilterStatus; label: string }[] = [
  { value: "all", label: "All" },
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
];

export function FilterDropdown() {
  const { state, dispatch } = useInvoices();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checked = new Set<InvoiceStatus | "all">([state.filter]);

  const toggle = (value: FilterStatus) => {
    dispatch({ type: "SET_FILTER", payload: value });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const label =
    state.filter === "all"
      ? "Filter by status"
      : `Filter: ${state.filter.charAt(0).toUpperCase() + state.filter.slice(1)}`;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-3 font-bold text-body-bold text-col-text dark:text-col-dark-text hover:text-purple dark:hover:text-purple transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded"
      >
        <span className="hidden md:inline">{label}</span>
        <span className="md:hidden">Filter</span>
        <ChevronDown
          size={11}
          strokeWidth={3}
          className={`text-purple transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Filter invoices by status"
          className="
            absolute top-[calc(100%+1rem)] w-40 bg-col-white dark:bg-col-dark-ele
            rounded-lg shadow-dropdown dark:shadow-dropdown-dark
            p-6 flex flex-col gap-4 z-30 animate-scale-in
          "
        >
          {OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  role="option"
                  aria-selected={checked.has(opt.value)}
                  checked={checked.has(opt.value)}
                  onChange={() => toggle(opt.value)}
                  className="sr-only"
                />
                <div
                  className={`
                    w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors duration-150
                    ${
                      checked.has(opt.value)
                        ? "bg-purple border-purple"
                        : "border-col-border dark:border-col-dark-border group-hover:border-purple bg-transparent"
                    }
                  `}
                  aria-hidden="true"
                >
                  {checked.has(opt.value) && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="font-bold text-body-bold text-col-text dark:text-col-dark-text capitalize">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
