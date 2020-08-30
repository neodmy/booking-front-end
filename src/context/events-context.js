import React, { useState, createContext, useEffect } from "react";

import {
  createEventRequest,
  listEventsRequest,
} from "../respositories/events-repository";

export const EventsContext = createContext({});

export const EventsProvider = ({ children }) => {
  const [createdEvent, setCreatedEvent] = useState({});
  const [events, setEvents] = useState([]);

  const createEvent = async (event) => {
    const fetchedEvent = await createEventRequest(event);

    setCreatedEvent({ ...fetchedEvent });
  };

  const listEvents = async () => {
    const fetchedEvents = await listEventsRequest();
    setEvents(fetchedEvents);
  };

  useEffect(() => {
    listEvents();
  }, [createdEvent]);

  return (
    <EventsContext.Provider
      value={{
        createdEvent,
        events,
        createEvent,
        listEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
