import { formatCurrency } from "@/utils/formatCurrency";
import type { Invoice } from "@/types/invoice";

interface Props {
  invoice: Invoice;
}

export default function InvoiceItemsTable({ invoice }: Props) {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-4 bg-[#F9FAFE] dark:bg-col-dark-ele px-8 py-4">
        <span className="text-body text-col-label dark:text-col-dark-label">
          Item Name
        </span>
        <span className="text-body text-col-label dark:text-col-dark-label text-center w-12">
          QTY.
        </span>
        <span className="text-body text-col-label dark:text-col-dark-label text-right w-28">
          Price
        </span>
        <span className="text-body text-col-label dark:text-col-dark-label text-right w-28">
          Total
        </span>
      </div>

      <div className="bg-[#F9FAFE] dark:bg-col-dark-ele px-8 py-2">
        {invoice.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 md:grid md:grid-cols-[1fr_auto_auto_auto] md:gap-4"
          >
            <div className="md:contents">
              <p className="font-bold text-body-bold text-col-text dark:text-col-dark-text">
                {item.name}
              </p>
              <p className="md:hidden text-body text-col-label dark:text-col-dark-label mt-2">
                {item.quantity} × {formatCurrency(item.price)}
              </p>
            </div>
            <span className="hidden md:block text-body text-col-label dark:text-col-dark-label text-center w-12">
              {item.quantity}
            </span>
            <span className="hidden md:block text-body text-col-label dark:text-col-dark-label text-right w-28">
              {formatCurrency(item.price)}
            </span>
            <span className="font-bold text-body-bold text-col-text dark:text-col-dark-text text-right md:w-28">
              {formatCurrency(item.total)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-[#373B53] dark:bg-col-dark-bg px-8 py-6 rounded-b-lg">
        <span className="text-body text-white opacity-80">Amount Due</span>
        <span className="font-bold text-[1.5rem] leading-[2rem] tracking-[-0.047rem] text-white">
          {formatCurrency(invoice.total)}
        </span>
      </div>
    </div>
  );
}
