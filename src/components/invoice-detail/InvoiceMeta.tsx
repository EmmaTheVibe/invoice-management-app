import { formatDate } from "@/utils/formatDate";
import type { Invoice } from "@/types/invoice";

interface Props {
  invoice: Invoice;
}

export default function InvoiceMeta({ invoice }: Props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">
        <div>
          <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text mb-1">
            <span className="text-col-label">#</span>
            {invoice.id}
          </p>
          <p className="text-body text-col-label dark:text-col-dark-label">
            {invoice.description}
          </p>
        </div>
        <address className="not-italic text-body text-col-label dark:text-col-dark-label md:text-right leading-relaxed">
          {invoice.senderAddress.street}
          <br />
          {invoice.senderAddress.city}
          <br />
          {invoice.senderAddress.postCode}
          <br />
          {invoice.senderAddress.country}
        </address>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        <div>
          <p className="text-body text-col-label dark:text-col-dark-label mb-3">
            Invoice Date
          </p>
          <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text">
            {formatDate(invoice.createdAt)}
          </p>
        </div>

        <div className="row-span-2 md:row-span-1">
          <p className="text-body text-col-label dark:text-col-dark-label mb-3">
            Bill To
          </p>
          <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text mb-2">
            {invoice.clientName}
          </p>
          <address className="not-italic text-body text-col-label dark:text-col-dark-label leading-relaxed">
            {invoice.clientAddress.street}
            <br />
            {invoice.clientAddress.city}
            <br />
            {invoice.clientAddress.postCode}
            <br />
            {invoice.clientAddress.country}
          </address>
        </div>

        <div className="hidden md:block">
          <p className="text-body text-col-label dark:text-col-dark-label mb-3">
            Sent To
          </p>
          <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text break-all">
            {invoice.clientEmail}
          </p>
        </div>

        <div>
          <p className="text-body text-col-label dark:text-col-dark-label mb-3">
            Payment Due
          </p>
          <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text">
            {formatDate(invoice.paymentDue)}
          </p>
        </div>
      </div>

      <div className="md:hidden mb-10">
        <p className="text-body text-col-label dark:text-col-dark-label mb-3">
          Sent To
        </p>
        <p className="font-bold text-heading-s text-col-text dark:text-col-dark-text break-all">
          {invoice.clientEmail}
        </p>
      </div>
    </>
  );
}
