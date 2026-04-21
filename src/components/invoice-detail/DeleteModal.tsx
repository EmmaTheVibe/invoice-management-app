import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface Props {
  invoiceId: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  invoiceId,
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      aria-labelledby="delete-modal-title"
    >
      <h2
        id="delete-modal-title"
        className="text-heading-m text-col-text dark:text-col-dark-text mb-3"
      >
        Confirm Deletion
      </h2>
      <p className="text-body text-col-muted dark:text-col-dark-label mb-8 leading-relaxed">
        Are you sure you want to delete invoice{" "}
        <strong className="text-col-text dark:text-col-dark-text">
          #{invoiceId}
        </strong>
        ? This action cannot be undone.
      </p>
      <div className="flex items-center justify-center md:justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
