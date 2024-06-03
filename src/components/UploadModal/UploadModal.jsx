import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./UploadModal.module.css";
import { X } from "lucide-react";
const UploadModal = ({ onClose, card, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      setShowError(true);
    } else {
      onAdd(name, description);
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <img src={card.image} alt={card.label} />
            <h2 className={styles.title}>Upload from {card.name}</h2>
          </div>
          <button
            type="button"
            className="btn btn-icon"
            onClick={() => onClose()}
          >
            <X size={34} />
          </button>
        </div>
        <div className={styles.formGroupsWrapper}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input"
              ref={nameInputRef}
              value={name}
              onChange={handleNameInput}
            />
            {!name && showError && (
              <p className="error">Name can&apos;t be empty</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className="label">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {!description && showError && (
              <p className="error">Description can&apos;t be empty</p>
            )}
          </div>
        </div>
        <div className={styles.formButtons}>
          <button type="submit" className="btn btn-primary btn-medium">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadModal;
