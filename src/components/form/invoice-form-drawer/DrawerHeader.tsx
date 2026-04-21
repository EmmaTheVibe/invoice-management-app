import { X } from "lucide-react";
import type { Dispatch } from "react";
import type { Action } from "@/context/invoice/InvoiceContext";

interface Props {
  isEdit: boolean;
  editingId?: string;
  dispatch: Dispatch<Action>;
}

export default function DrawerHeader({ isEdit, editingId, dispatch }: Props) {
  return (
    <div className="px-6 md:px-14 pt-20 pb-4 flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-heading-m text-col-text dark:text-col-dark-text">
          {isEdit ? (
            <>
              Edit <span className="text-col-label">#</span>
              {editingId}
            </>
          ) : (
            "New Invoice"
          )}
        </h2>
        <button
          onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
          aria-label="Close form"
          className="p-2 text-col-label hover:text-col-text dark:hover:text-col-dark-text transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
