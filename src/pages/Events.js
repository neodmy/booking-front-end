/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../context/auth-context";
import { EventsContext } from "../context/events-context";

import "./Events.css";

const EventsPage = () => {
  const [creating, setCreating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { token } = useContext(AuthContext);
  const { createEvent, events, isLoadingEvents } = useContext(EventsContext);

  const titleElRef = React.createRef();
  const priceElRef = React.createRef();
  const dateElRef = React.createRef();
  const descriptionElRef = React.createRef();

  const startCreateEventHandler = () => {
    setCreating(true);
  };

  const modalCancelHandler = () => {
    setCreating(false);
    setSelectedEvent(null);
  };

  const modalConfirmHandler = () => {
    setCreating(false);
    const title = titleElRef.current.value;
    const price = priceElRef.current.value;
    const date = dateElRef.current.value;
    const description = descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price.trim().length === 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    )
      return;

    createEvent({ title, price: Number(price), date, description, token });
  };

  const showDetailHandler = (eventId) => {
    setSelectedEvent(events.find(({ _id }) => _id === eventId));
  };

  const bookEventHandler = () => {};

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
            confirmText="Confirm"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="title">Price</label>
                <input type="number" id="price" ref={priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea id="description" rows="4" ref={descriptionElRef} />
              </div>
            </form>
          </Modal>
        </>
      )}
      {selectedEvent && (
        <>
          <Backdrop />
          <Modal
            title={selectedEvent.title}
            canCancel
            canConfirm
            onCancel={modalCancelHandler}
            onConfirm={bookEventHandler}
            confirmText="Book"
          >
            <h1>{selectedEvent.title}</h1>
            <h2>
              ${selectedEvent.price} -{" "}
              {new Date(selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{selectedEvent.description}</p>
          </Modal>
        </>
      )}
      {token && (
        <div className="events-control">
          <p>Share you own Events!</p>
          <button
            type="button"
            className="btn"
            onClick={startCreateEventHandler}
          >
            Create Event
          </button>
        </div>
      )}
      {isLoadingEvents ? (
        <Spinner />
      ) : (
        <EventList events={events} onViewDetail={showDetailHandler} />
      )}
    </>
  );
};

export default EventsPage;
