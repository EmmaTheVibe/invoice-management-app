import { StatusBadge } from "@/components/ui/StatusBadge";
import InvoiceActions from "./InvoiceActions";
import type { Invoice } from "@/types/invoice";

interface Props {
  invoice: Invoice;
  onEdit: () => void;
  onDelete: () => void;
  onMarkPaid: () => void;
}

export default function InvoiceStatusBar({
  invoice,
  onEdit,
  onDelete,
  onMarkPaid,
}: Props) {
  return (
    <div className="flex items-center justify-between bg-col-white dark:bg-col-dark-card rounded-lg px-8 py-5 shadow-card dark:shadow-card-dark mb-6">
      <div className="flex items-center gap-5">
        <span className="text-body text-col-label dark:text-col-dark-label">
          Status
        </span>
        <StatusBadge status={invoice.status} />
      </div>
      <div
        className="hidden md:flex items-center gap-2"
        role="group"
        aria-label="Invoice actions"
      >
        <InvoiceActions
          invoice={invoice}
          onEdit={onEdit}
          onDelete={onDelete}
          onMarkPaid={onMarkPaid}
        />
      </div>
    </div>
  );
}
