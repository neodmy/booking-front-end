import React, { useState } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";

import "./Events.css";

const EventsPage = () => {
  const [creating, setCreating] = useState(false);

  const startCreateEventHandler = () => {
    setCreating(true);
  };

  const modalCancelHandler = () => {
    setCreating(false);
  };

  const modalConfirmHandler = () => {
    setCreating(false);
  };

  return (
    <>
      {creating && (
        <>
          <Backdrop />
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={modalCancelHandler}
            onConfirm={modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
        </>
      )}
      <div className="events-control">
        <p>Share you own Events!</p>
        <button type="button" className="btn" onClick={startCreateEventHandler}>
          Create Event
        </button>
      </div>
    </>
  );
};

export default EventsPage;
