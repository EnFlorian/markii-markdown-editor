import "./DeleteModal.scss";
import Modal from "react-modal";
import { useUIContext } from "../../state/UIContext";
import { useFilesContext } from "../../state/FilesContext";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
  },
};

Modal.setAppElement("#root");

const DeleteModal = () => {
  const { isModalOpen, setIsModalOpen } = useUIContext();
  const { openFile, removeFile } = useFilesContext();

  const handleConfirmation = () => {
    setIsModalOpen(false);
    removeFile(openFile);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={customStyles}
      contentLabel="Confirm Delete"
    >
      <section className="delete-modal">
        <h2 className="delete-modal__title">Confirm Deletion!</h2>
        <p className="delete-modal__description">
          Are you sure you want to delete this file? This action cannot be undone.
        </p>
        <div className="delete-modal__buttons">
          <button className="delete-modal__button delete-modal__button--danger" onClick={handleConfirmation}>
            Delete
          </button>
          <button className="delete-modal__button " onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default DeleteModal;
