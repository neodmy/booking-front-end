import React, { useState, createContext, useEffect } from "react";

import {
  createEventRequest,
  listEventsRequest,
} from "../respositories/events-repository";

export const EventsContext = createContext({});

export const EventsProvider = ({ children }) => {
  const [createdEvent, setCreatedEvent] = useState({});
  const [events, setEvents] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  const createEvent = async (event) => {
    const fetchedEvent = await createEventRequest(event);

    setCreatedEvent({ ...fetchedEvent });
  };

  const listEvents = async () => {
    try {
      setIsLoadingEvents(true);
      const fetchedEvents = await listEventsRequest();
      setEvents(fetchedEvents);
      setIsLoadingEvents(false);
    } catch (err) {
      setIsLoadingEvents(false);
      throw err;
    }
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
        isLoadingEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
