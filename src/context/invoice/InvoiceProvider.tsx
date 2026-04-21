import { useReducer, useEffect, type ReactNode } from "react";
import type { Invoice, InvoiceStatus } from "@/types/invoice";
import { SEED_INVOICES } from "@/utils/seedData";
import {
  InvoiceContext,
  type InvoiceState,
  type Action,
} from "./InvoiceContext";

const STORAGE_KEY = "invoicio-invoices";

function reducer(state: InvoiceState, action: Action): InvoiceState {
  switch (action.type) {
    case "ADD_INVOICE":
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        drawerOpen: false,
      };

    case "UPDATE_INVOICE":
      return {
        ...state,
        invoices: state.invoices.map((inv) =>
          inv.id === action.payload.id ? action.payload : inv,
        ),
        drawerOpen: false,
        editingId: null,
      };

    case "DELETE_INVOICE":
      return {
        ...state,
        invoices: state.invoices.filter((inv) => inv.id !== action.payload),
      };

    case "MARK_AS_PAID":
      return {
        ...state,
        invoices: state.invoices.map((inv) =>
          inv.id === action.payload
            ? { ...inv, status: "paid" as InvoiceStatus }
            : inv,
        ),
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    case "OPEN_DRAWER":
      return { ...state, drawerOpen: true, editingId: action.payload ?? null };

    case "CLOSE_DRAWER":
      return { ...state, drawerOpen: false, editingId: null };

    default:
      return state;
  }
}

function loadInvoices(): Invoice[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Invoice[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return SEED_INVOICES;
}

const initialState: InvoiceState = {
  invoices: loadInvoices(),
  filter: "all",
  drawerOpen: false,
  editingId: null,
};

export function InvoiceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.invoices));
  }, [state.invoices]);

  const filteredInvoices =
    state.filter === "all"
      ? state.invoices
      : state.invoices.filter((inv) => inv.status === state.filter);

  const getInvoice = (id: string) =>
    state.invoices.find((inv) => inv.id === id);

  return (
    <InvoiceContext.Provider
      value={{ state, dispatch, filteredInvoices, getInvoice }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
