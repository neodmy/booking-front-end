/* eslint-disable react/prop-types */
import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const {
    title,
    children,
    canCancel,
    canConfirm,
    onCancel,
    onConfirm,
    confirmText,
  } = props;
  return (
    <div className="modal">
      <header className="modal__header">
        <h1>{title}</h1>
      </header>
      <section className="modal__content">{children}</section>
      <section className="modal__actions">
        {canCancel && (
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
        )}
        {canConfirm && (
          <button type="button" className="btn" onClick={onConfirm}>
            {confirmText}
          </button>
        )}
      </section>
    </div>
  );
};

export default Modal;
