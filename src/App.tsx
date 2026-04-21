import { Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { InvoiceListPage } from "@/pages/InvoiceListPage";
import { InvoiceDetailPage } from "@/pages/InvoiceDetailPage";
import { InvoiceFormDrawer } from "@/components/form/invoice-form-drawer/InvoiceFormDrawer";
import { useInvoices } from "@/context/invoice/useInvoices";

export default function App() {
  const { state } = useInvoices();

  return (
    <div className="flex flex-col lg:flex-row min-h-dvh">
      <Sidebar />

      <main className="flex-1 lg:ml-[103px] overflow-x-hidden">
        <div className="max-w-[780px] mx-auto px-6 py-24 md:py-30 md:px-12">
          <Routes>
            <Route path="/" element={<InvoiceListPage />} />
            <Route path="/invoice/:id" element={<InvoiceDetailPage />} />
          </Routes>
        </div>
      </main>

      {state.drawerOpen && <InvoiceFormDrawer />}
    </div>
  );
}
