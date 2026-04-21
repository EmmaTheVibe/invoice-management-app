import { Trash2 } from "lucide-react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InvoiceFormData } from "@/types/invoice";
import { formatCurrency } from "@/utils/formatCurrency";

interface Props {
  index: number;
  register: UseFormRegister<InvoiceFormData>;
  errors: FieldErrors<InvoiceFormData>;
  onRemove: () => void;
  quantity: number;
  price: number;
}

export function ItemRow({
  index,
  register,
  errors,
  onRemove,
  quantity,
  price,
}: Props) {
  const total = (Number(quantity) || 0) * (Number(price) || 0);
  const itemErrors = errors.items?.[index];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={`item-name-${index}`}
          className="text-body text-col-label dark:text-col-dark-label font-medium"
        >
          Item Name
        </label>
        <input
          id={`item-name-${index}`}
          {...register(`items.${index}.name`, { required: "Required" })}
          className={`form-input text-base ${itemErrors?.name ? "error" : ""}`}
          aria-invalid={!!itemErrors?.name}
        />
        {itemErrors?.name && (
          <span className="text-red-500 text-body font-medium" role="alert">
            {itemErrors.name.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-[64px_1fr_80px_auto] items-end gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={`item-qty-${index}`}
            className="text-body text-col-label dark:text-col-dark-label font-medium"
          >
            Qty.
          </label>
          <input
            id={`item-qty-${index}`}
            type="number"
            min={1}
            {...register(`items.${index}.quantity`, {
              required: true,
              min: 1,
              valueAsNumber: true,
            })}
            className={`form-input text-base text-center ${itemErrors?.quantity ? "error" : ""}`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={`item-price-${index}`}
            className="text-body text-col-label dark:text-col-dark-label font-medium"
          >
            Price
          </label>
          <input
            id={`item-price-${index}`}
            type="number"
            min={0}
            step="0.01"
            {...register(`items.${index}.price`, {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
            className={`form-input text-base ${itemErrors?.price ? "error" : ""}`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-body text-col-label dark:text-col-dark-label font-medium">
            Total
          </span>
          <span className="font-bold text-body-bold text-col-muted dark:text-col-dark-muted py-3 whitespace-nowrap">
            {formatCurrency(total)}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="opacity-0 select-none text-body" aria-hidden="true">
            x
          </span>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove item ${index + 1}`}
            className="pb-4 flex justify-end text-col-label hover:text-red-500 dark:text-col-dark-label dark:hover:text-red-500 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded"
          >
            <Trash2 size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
