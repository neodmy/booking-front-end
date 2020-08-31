/* eslint-disable react/prop-types */
import React from "react";

import EventItem from "./EventItem/EventItem";

import "./EventList.css";

const eventList = (props) => {
  const { events, onViewDetail } = props;
  const eventItems = events.map((event) => {
    const { _id } = event;
    return <EventItem key={_id} event={event} onDetail={onViewDetail} />;
  });

  return <ul className="event__list">{eventItems}</ul>;
};

export default eventList;
