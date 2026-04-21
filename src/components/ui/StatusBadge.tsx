import type { InvoiceStatus } from "@/types/invoice";

interface Props {
  status: InvoiceStatus;
}

const config: Record<
  InvoiceStatus,
  { bg: string; darkBg: string; dot: string; text: string; darkText: string }
> = {
  paid: {
    bg: "bg-[#F3FDF9]",
    darkBg: "dark:bg-[rgba(51,214,159,0.06)]",
    dot: "bg-[#33D69F]",
    text: "text-[#33D69F]",
    darkText: "dark:text-[#33D69F]",
  },
  pending: {
    bg: "bg-[#FFF8F0]",
    darkBg: "dark:bg-[rgba(255,143,0,0.06)]",
    dot: "bg-[#FF8F00]",
    text: "text-[#FF8F00]",
    darkText: "dark:text-[#FF8F00]",
  },
  draft: {
    bg: "bg-[#F4F4F5]",
    darkBg: "dark:bg-[rgba(223,227,250,0.06)]",
    dot: "bg-[#373B53] dark:bg-[#DFE3FA]",
    text: "text-[#373B53]",
    darkText: "dark:text-[#DFE3FA]",
  },
};

export function StatusBadge({ status }: Props) {
  const c = config[status];

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded
        font-bold text-[0.813rem] leading-[1.375rem] tracking-[-0.01rem] capitalize
        min-w-[104px] justify-center
        ${c.bg} ${c.darkBg} ${c.text} ${c.darkText}
      `}
      aria-label={`Status: ${status}`}
    >
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
