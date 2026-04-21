import { Plus } from "lucide-react";
import type { UseFormRegister, FieldErrors, Control } from "react-hook-form";
import { useFieldArray, useWatch } from "react-hook-form";
import type { InvoiceFormData } from "@/types/invoice";
import { ItemRow } from "../ItemRow";
import { generateItemId } from "@/utils/generateId";

const EMPTY_ITEM = () => ({
  itemId: generateItemId(),
  name: "",
  quantity: 1,
  price: 0,
});

interface Props {
  register: UseFormRegister<InvoiceFormData>;
  errors: FieldErrors<InvoiceFormData>;
  control: Control<InvoiceFormData>;
}

export default function ItemListSection({ register, errors, control }: Props) {
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const watchedItems = useWatch({ control, name: "items" });
  const hasItemsError = fields.length === 0;

  return (
    <fieldset className="mb-6">
      <legend className="text-[1.125rem] font-bold text-[#777F98] mb-6">
        Item List
      </legend>

      {fields.length > 0 && (
        <div
          className="flex flex-col gap-10 mb-6"
          role="list"
          aria-label="Invoice items"
        >
          {fields.map((field, index) => (
            <div key={field.id} role="listitem">
              <ItemRow
                index={index}
                register={register}
                errors={errors}
                onRemove={() => remove(index)}
                quantity={Number(watchedItems?.[index]?.quantity) || 0}
                price={Number(watchedItems?.[index]?.price) || 0}
              />
            </div>
          ))}
        </div>
      )}

      {hasItemsError && (
        <p className="text-red-500 text-body font-medium mb-4" role="alert">
          An item must be added
        </p>
      )}

      <button
        type="button"
        onClick={() => append(EMPTY_ITEM())}
        className="
          w-full py-4 rounded-full
          bg-[#F9FAFE] dark:bg-col-dark-ele
          text-col-label dark:text-col-dark-muted
          font-bold text-body-bold
          hover:bg-col-border dark:hover:bg-[#DFE3FA] dark:hover:text-col-text
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple
          flex items-center justify-center gap-2
        "
        aria-label="Add new item"
      >
        <Plus size={11} strokeWidth={3} aria-hidden="true" />
        Add New Item
      </button>
    </fieldset>
  );
}
