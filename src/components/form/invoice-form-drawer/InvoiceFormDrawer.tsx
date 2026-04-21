import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { useInvoices } from "@/context/invoice/useInvoices";
import type { InvoiceFormData, Invoice } from "@/types/invoice";
import { generateInvoiceId, generateItemId } from "@/utils/generateId";
import { addDays, todayISO } from "@/utils/formatDate";
import DrawerHeader from "./DrawerHeader";
import BillFromSection from "./BillFromSection";
import BillToSection from "./BillToSection";
import InvoiceDetailsSection from "./InvoiceDetailsSection";
import ItemListSection from "./ItemListSection";
import FormFooter from "./FormFooter";

function buildDefaultValues(editing: Invoice | undefined): InvoiceFormData {
  if (editing) {
    return {
      description: editing.description,
      paymentTerms: editing.paymentTerms,
      clientName: editing.clientName,
      clientEmail: editing.clientEmail,
      createdAt: editing.createdAt,
      senderAddress: { ...editing.senderAddress },
      clientAddress: { ...editing.clientAddress },
      items: editing.items.map((i) => ({
        itemId: i.id,
        name: i.name,
        quantity: i.quantity,
        price: i.price,
      })),
    };
  }
  return {
    description: "",
    paymentTerms: 30,
    clientName: "",
    clientEmail: "",
    createdAt: todayISO(),
    senderAddress: { street: "", city: "", postCode: "", country: "" },
    clientAddress: { street: "", city: "", postCode: "", country: "" },
    items: [{ itemId: generateItemId(), name: "", quantity: 1, price: 0 }],
  };
}

export function InvoiceFormDrawer() {
  const { state, dispatch, getInvoice } = useInvoices();
  const editing = state.editingId ? getInvoice(state.editingId) : undefined;
  const isEdit = !!editing;

  const drawerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InvoiceFormData>({ defaultValues: buildDefaultValues(editing) });

  useEffect(() => {
    reset(buildDefaultValues(editing));
  }, [state.editingId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch({ type: "CLOSE_DRAWER" });
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function buildInvoice(
    data: InvoiceFormData,
    status: Invoice["status"],
  ): Invoice {
    const items = data.items.map((item) => ({
      id: item.itemId || generateItemId(),
      name: item.name,
      quantity: Number(item.quantity) || 0,
      price: Number(item.price) || 0,
      total: (Number(item.quantity) || 0) * (Number(item.price) || 0),
    }));
    return {
      id: editing?.id ?? generateInvoiceId(),
      createdAt: data.createdAt,
      paymentDue: addDays(data.createdAt, Number(data.paymentTerms)),
      description: data.description,
      paymentTerms: Number(data.paymentTerms),
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status,
      senderAddress: data.senderAddress,
      clientAddress: data.clientAddress,
      items,
      total: items.reduce((sum, i) => sum + i.total, 0),
    };
  }

  const onSavePending = handleSubmit((data) => {
    const status = isEdit
      ? editing!.status === "paid"
        ? "paid"
        : "pending"
      : "pending";
    const invoice = buildInvoice(data, status);
    dispatch(
      isEdit
        ? { type: "UPDATE_INVOICE", payload: invoice }
        : { type: "ADD_INVOICE", payload: invoice },
    );
  });

  const handleDraft = () => {
    const data = getValues();
    const invoice = buildInvoice(data, "draft");
    dispatch(
      isEdit
        ? { type: "UPDATE_INVOICE", payload: invoice }
        : { type: "ADD_INVOICE", payload: invoice },
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-30 flex"
      role="dialog"
      aria-modal="true"
      aria-label={isEdit ? "Edit invoice" : "Create new invoice"}
    >
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        className="relative z-10 flex flex-col w-full max-w-[616px] h-full
          bg-col-bg dark:bg-col-dark-bg lg:ml-[103px] lg:rounded-r-[20px]
          overflow-hidden animate-slide-in"
      >
        <DrawerHeader
          isEdit={isEdit}
          editingId={editing?.id}
          dispatch={dispatch}
        />

        <div className="flex-1 overflow-y-auto px-6 md:px-14 pb-4">
          <form id="invoice-form" onSubmit={onSavePending} noValidate>
            <BillFromSection register={register} errors={errors} />
            <BillToSection register={register} errors={errors} />
            <InvoiceDetailsSection register={register} errors={errors} />
            <ItemListSection
              register={register}
              errors={errors}
              control={control}
            />

            {Object.keys(errors).length > 0 && (
              <p
                className="text-red-500 text-body font-medium mt-2"
                role="alert"
              >
                - All fields must be completed
              </p>
            )}
          </form>
        </div>

        <FormFooter
          isEdit={isEdit}
          dispatch={dispatch}
          handleDraft={handleDraft}
        />
      </div>
    </div>,
    document.body,
  );
}
