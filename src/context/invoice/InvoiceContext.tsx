import { createContext } from "react";
import type { Invoice, FilterStatus } from "@/types/invoice";

export interface InvoiceState {
  invoices: Invoice[];
  filter: FilterStatus;
  drawerOpen: boolean;
  editingId: string | null;
}

export type Action =
  | { type: "ADD_INVOICE"; payload: Invoice }
  | { type: "UPDATE_INVOICE"; payload: Invoice }
  | { type: "DELETE_INVOICE"; payload: string }
  | { type: "MARK_AS_PAID"; payload: string }
  | { type: "SET_FILTER"; payload: FilterStatus }
  | { type: "OPEN_DRAWER"; payload?: string }
  | { type: "CLOSE_DRAWER" };

export interface InvoiceContextValue {
  state: InvoiceState;
  dispatch: React.Dispatch<Action>;
  filteredInvoices: Invoice[];
  getInvoice: (id: string) => Invoice | undefined;
}

export const InvoiceContext = createContext<InvoiceContextValue | null>(null);
