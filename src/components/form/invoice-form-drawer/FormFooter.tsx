import type { Dispatch } from "react";
import type { Action } from "@/context/invoice/InvoiceContext";
import { Button } from "../../ui/Button";

interface Props {
  isEdit: boolean;
  dispatch: Dispatch<Action>;
  handleDraft: () => void;
}

export default function FormFooter({ isEdit, dispatch, handleDraft }: Props) {
  return (
    <div
      className="
                    flex-shrink-0 px-6 md:px-14 py-8
                    bg-col-white dark:bg-col-dark-card
                    shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
                  "
      role="group"
      aria-label="Form actions"
    >
      {isEdit ? (
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="invoice-form">
            Save Changes
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
          >
            Cancel
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="dark" type="button" onClick={handleDraft}>
              Save Draft
            </Button>
            <Button variant="primary" type="submit" form="invoice-form">
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
