import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Invoice } from "@/types/invoice";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/formatCurrency";

interface Props {
  invoice: Invoice;
}

export function InvoiceCard({ invoice }: Props) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="
        block w-full
        bg-col-white dark:bg-col-dark-card
        rounded-lg border border-transparent
        hover:border-purple
        shadow-card dark:shadow-card-dark
        transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2
      "
      aria-label={`Invoice ${invoice.id} — ${invoice.clientName}, ${formatCurrency(invoice.total)}, ${invoice.status}`}
    >
      <div className="md:hidden p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-body-bold text-col-text dark:text-col-dark-text">
            <span className="text-col-label">#</span>
            {invoice.id}
          </span>
          <span className="text-body text-col-label dark:text-col-dark-label">
            {invoice.clientName}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-body text-col-label dark:text-col-dark-label">
              {formatDate(invoice.paymentDue)}
            </span>
            <span className="font-bold text-heading-s text-col-text dark:text-col-dark-text">
              {formatCurrency(invoice.total)}
            </span>
          </div>
          <StatusBadge status={invoice.status} />
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr_1fr_auto_auto] items-center gap-4 px-8 py-5">
        <span className="font-bold text-body-bold text-col-text dark:text-col-dark-text">
          <span className="text-col-label">#</span>
          {invoice.id}
        </span>

        <span className="text-body text-col-label dark:text-col-dark-label">
          {formatDate(invoice.paymentDue)}
        </span>

        <span className="text-body text-col-label dark:text-col-dark-label">
          {invoice.clientName}
        </span>

        <span className="font-bold text-heading-s text-col-text dark:text-col-dark-text text-right">
          {formatCurrency(invoice.total)}
        </span>

        <StatusBadge status={invoice.status} />

        <ChevronRight
          size={10}
          strokeWidth={3}
          className="text-purple"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
