import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ message, onConfirm }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="yes" onClick={() => onConfirm(true)}>
            Yes
          </button>
          <button className="no" onClick={() => onConfirm(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
