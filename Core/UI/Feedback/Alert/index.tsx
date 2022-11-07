import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Modal from "~/Pages/Shared/Components/Modal";

function AlertModal({ children, onClose }) {
  const [isOpen, setIsOPen] = useState(true);
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOPen(false);
        if (onClose) onClose();
      }}>
      {children}
    </Modal>
  );
}

function showAlert(content, onClose) {
  const modalroot = document.createElement("div");
  const root = ReactDOM.createRoot(modalroot as Element);
  root.render(<AlertModal onClose={onClose}>{content}</AlertModal>);
}

export default showAlert;
