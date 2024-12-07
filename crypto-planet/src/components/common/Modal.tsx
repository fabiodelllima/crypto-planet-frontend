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
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose}>
              <div className="border border-gray-400 px-4 py-2 rounded-md mr-0.5 hover:border-white hover:text-white">
                ✕
              </div>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
