import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InvoiceFormData } from "@/types/invoice";
import { FormField } from "../FormField";

interface Props {
  register: UseFormRegister<InvoiceFormData>;
  errors: FieldErrors<InvoiceFormData>;
}

export default function BillFromSection({ register, errors }: Props) {
  return (
    <fieldset className="mb-10">
      <legend className="text-body-bold text-purple mb-6">Bill From</legend>
      <div className="flex flex-col gap-6">
        <FormField
          label="Street Address"
          id="sender-street"
          error={errors.senderAddress?.street?.message}
          {...register("senderAddress.street", { required: "Required" })}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            label="City"
            id="sender-city"
            error={errors.senderAddress?.city?.message}
            {...register("senderAddress.city", { required: "Required" })}
          />
          <FormField
            label="Post Code"
            id="sender-postcode"
            error={errors.senderAddress?.postCode?.message}
            {...register("senderAddress.postCode", { required: "Required" })}
          />
          <FormField
            label="Country"
            id="sender-country"
            error={errors.senderAddress?.country?.message}
            {...register("senderAddress.country", { required: "Required" })}
          />
        </div>
      </div>
    </fieldset>
  );
}
