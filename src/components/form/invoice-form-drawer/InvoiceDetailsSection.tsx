import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InvoiceFormData } from "@/types/invoice";
import { FormField } from "../FormField";
import { SelectField } from "../SelectField";

const PAYMENT_TERMS = [
  { value: 1, label: "Net 1 Day" },
  { value: 7, label: "Net 7 Days" },
  { value: 14, label: "Net 14 Days" },
  { value: 30, label: "Net 30 Days" },
];

interface Props {
  register: UseFormRegister<InvoiceFormData>;
  errors: FieldErrors<InvoiceFormData>;
}

export default function InvoiceDetailsSection({ register, errors }: Props) {
  return (
    <fieldset className="mb-10">
      <legend className="sr-only">Invoice Details</legend>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Invoice Date"
            id="invoice-date"
            type="date"
            error={errors.createdAt?.message}
            {...register("createdAt", { required: "Required" })}
          />
          <SelectField
            label="Payment Terms"
            id="payment-terms"
            options={PAYMENT_TERMS}
            error={errors.paymentTerms?.message}
            {...register("paymentTerms", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        <FormField
          label="Project Description"
          id="description"
          placeholder="e.g. Graphic Design Service"
          error={errors.description?.message}
          {...register("description", { required: "Required" })}
        />
      </div>
    </fieldset>
  );
}
