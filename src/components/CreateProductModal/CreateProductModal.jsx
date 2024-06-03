import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./CreateProductModal.module.css";

const CreateProductModal = ({ onClose, createProject, projects }) => {
  const [projectName, setProjectName] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const hanleInput = (e) => {
    setShowError(false);
    setProjectName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName) {
      setShowError(true);
      setErrorMessage("Project Name can&apos;t be empty");
    } else if (projects.some((project) => project.name === projectName)) {
      setShowError(true);
      setErrorMessage("Project already exists");
    } else {
      createProject(projectName);
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className={styles.modalForm}>
        <h2 className={styles.modalTitle}>Create Project</h2>
        <div className={styles.formGroup}>
          <label htmlFor="projectName" className="label">
            Enter Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            placeholder="Type here"
            className="input"
            onChange={(e) => hanleInput(e)}
            ref={inputRef}
          />
          {showError && <p className="error">{errorMessage}</p>}
        </div>

        <div className={styles.formButtons}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-destructiveGhost"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-purple">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateProductModal;
