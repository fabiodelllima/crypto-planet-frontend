import Container from "./Container";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <Container className="mx-2 relative w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose}>
              <div className="px-4 py-2 text-white rounded-md mr-0.5 bg-transparent hover:bg-greySecondary">
                ✕
              </div>
            </button>
          </div>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Modal;
