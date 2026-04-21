import { Plus } from "lucide-react";
import { useInvoices } from "@/context/invoice/useInvoices";
import { InvoiceCard } from "@/components/invoice/InvoiceCard";
import { FilterDropdown } from "@/components/filter/FilterDropdown";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export function InvoiceListPage() {
  const { filteredInvoices, state, dispatch } = useInvoices();

  const count = filteredInvoices.length;
  const countLabel =
    count === 0
      ? "No invoices"
      : window.innerWidth < 768
        ? `${count} invoice${count !== 1 ? "s" : ""}`
        : `There are ${count} total invoice${count !== 1 ? "s" : ""}`;

  return (
    <section aria-labelledby="invoices-heading">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-14">
        <div>
          <h1
            id="invoices-heading"
            className="text-heading-l text-col-text dark:text-col-dark-text"
          >
            Invoices
          </h1>
          <p className="text-body text-col-muted dark:text-col-dark-muted mt-1">
            {countLabel}
          </p>
        </div>

        <div className="flex items-center justify-between gap-5 md:gap-10">
          <FilterDropdown />

          <Button
            variant="primary"
            onClick={() => dispatch({ type: "OPEN_DRAWER" })}
            aria-label="Create new invoice"
            className="flex items-center gap-2 md:gap-4 pl-2 pr-4 md:pr-6"
          >
            <span
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <Plus size={11} strokeWidth={3} className="text-purple" />
            </span>
            <span className="hidden md:inline">New Invoice</span>
            <span className="md:hidden">New</span>
          </Button>
        </div>
      </div>

      {filteredInvoices.length === 0 ? (
        <EmptyState filtered={state.filter !== "all"} />
      ) : (
        <ul
          className="flex flex-col gap-4"
          role="list"
          aria-label="Invoice list"
        >
          {filteredInvoices.map((invoice) => (
            <li key={invoice.id}>
              <InvoiceCard invoice={invoice} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
