import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InvoiceFormData } from "@/types/invoice";
import { FormField } from "../FormField";

interface Props {
  register: UseFormRegister<InvoiceFormData>;
  errors: FieldErrors<InvoiceFormData>;
}

export default function BillToSection({ register, errors }: Props) {
  return (
    <fieldset className="mb-10">
      <legend className="text-body-bold text-purple mb-6">Bill To</legend>
      <div className="flex flex-col gap-6">
        <FormField
          label="Client's Name"
          id="client-name"
          error={errors.clientName?.message}
          {...register("clientName", { required: "Required" })}
        />
        <FormField
          label="Client's Email"
          id="client-email"
          type="email"
          placeholder="e.g. email@example.com"
          error={errors.clientEmail?.message}
          {...register("clientEmail", {
            required: "Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        <FormField
          label="Street Address"
          id="client-street"
          error={errors.clientAddress?.street?.message}
          {...register("clientAddress.street", { required: "Required" })}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FormField
            label="City"
            id="client-city"
            error={errors.clientAddress?.city?.message}
            {...register("clientAddress.city", { required: "Required" })}
          />
          <FormField
            label="Post Code"
            id="client-postcode"
            error={errors.clientAddress?.postCode?.message}
            {...register("clientAddress.postCode", { required: "Required" })}
          />
          <FormField
            label="Country"
            id="client-country"
            error={errors.clientAddress?.country?.message}
            {...register("clientAddress.country", { required: "Required" })}
          />
        </div>
      </div>
    </fieldset>
  );
}
