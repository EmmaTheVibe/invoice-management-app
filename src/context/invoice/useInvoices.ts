import { useContext } from "react";
import { InvoiceContext, type InvoiceContextValue } from "./InvoiceContext";

export function useInvoices(): InvoiceContextValue {
  const ctx = useContext(InvoiceContext);
  if (!ctx) throw new Error("useInvoices must be used inside InvoiceProvider");
  return ctx;
}
