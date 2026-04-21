import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useInvoices } from "@/context/invoice/useInvoices";
import InvoiceStatusBar from "@/components/invoice-detail/InvoiceStatusBar";
import InvoiceMeta from "@/components/invoice-detail/InvoiceMeta";
import InvoiceItemsTable from "@/components/invoice-detail/InvoiceItemsTable";
import InvoiceActions from "@/components/invoice-detail/InvoiceActions";
import DeleteModal from "@/components/invoice-detail/DeleteModal";

export function InvoiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getInvoice, dispatch } = useInvoices();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const invoice = getInvoice(id ?? "");

  if (!invoice) {
    return (
      <div className="text-center py-20">
        <p className="text-body text-col-muted dark:text-col-dark-muted">
          Invoice not found.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-purple font-bold hover:underline"
        >
          Go back
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch({ type: "DELETE_INVOICE", payload: invoice.id });
    navigate("/");
  };
  const handleMarkPaid = () =>
    dispatch({ type: "MARK_AS_PAID", payload: invoice.id });
  const handleEdit = () =>
    dispatch({ type: "OPEN_DRAWER", payload: invoice.id });

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-6 mb-8 font-bold text-body-bold text-col-text dark:text-col-dark-text hover:text-col-label dark:hover:text-col-dark-label transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded"
        aria-label="Go back to invoice list"
      >
        <ChevronLeft
          size={10}
          strokeWidth={3}
          className="text-purple"
          aria-hidden="true"
        />
        Go back
      </button>

      <InvoiceStatusBar
        invoice={invoice}
        onEdit={handleEdit}
        onDelete={() => setDeleteOpen(true)}
        onMarkPaid={handleMarkPaid}
      />

      <article
        className="bg-col-white dark:bg-col-dark-card rounded-lg px-6 py-8 md:px-8 md:py-10 shadow-card dark:shadow-card-dark"
        aria-label={`Invoice ${invoice.id} details`}
      >
        <InvoiceMeta invoice={invoice} />
        <InvoiceItemsTable invoice={invoice} />
      </article>

      <div
        className="md:hidden fixed bottom-0 left-0 right-0 bg-col-white dark:bg-col-dark-card px-6 py-5 flex items-center justify-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-20"
        role="group"
        aria-label="Invoice actions"
      >
        <InvoiceActions
          invoice={invoice}
          mobile
          onEdit={handleEdit}
          onDelete={() => setDeleteOpen(true)}
          onMarkPaid={handleMarkPaid}
        />
      </div>

      <DeleteModal
        invoiceId={invoice.id}
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
