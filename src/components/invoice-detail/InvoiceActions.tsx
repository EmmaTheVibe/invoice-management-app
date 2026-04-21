import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Invoice } from "@/types/invoice";

interface Props {
  invoice: Invoice;
  mobile?: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onMarkPaid: () => void;
}

export default function InvoiceActions({
  invoice,
  mobile = false,
  onEdit,
  onDelete,
  onMarkPaid,
}: Props) {
  if (mobile) {
    return (
      <>
        <Button variant="secondary" onClick={onEdit}>
          <Edit className="w-5" />
        </Button>
        <Button variant="danger" onClick={onDelete}>
          <Trash className="w-5" />
        </Button>
        {invoice.status === "pending" && (
          <Button variant="primary" onClick={onMarkPaid}>
            Mark Paid
          </Button>
        )}
        {invoice.status === "draft" && (
          <Button variant="primary" onClick={onMarkPaid}>
            Send
          </Button>
        )}
      </>
    );
  }

  return (
    <>
      <Button variant="secondary" onClick={onEdit} aria-label="Edit invoice">
        Edit
      </Button>
      <Button variant="danger" onClick={onDelete} aria-label="Delete invoice">
        Delete
      </Button>
      {invoice.status === "pending" && (
        <Button
          variant="primary"
          onClick={onMarkPaid}
          aria-label="Mark invoice as paid"
        >
          Mark as Paid
        </Button>
      )}
      {invoice.status === "draft" && (
        <Button
          variant="primary"
          onClick={onMarkPaid}
          aria-label="Send invoice"
        >
          Send
        </Button>
      )}
    </>
  );
}
