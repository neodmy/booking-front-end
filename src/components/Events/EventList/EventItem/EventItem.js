/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";

import "./EventItem.css";

const EventItem = (props) => {
  const { userId } = useContext(AuthContext);
  const { event, onDetail } = props;
  const { title, price, date, _id, creator } = event;
  const { _id: creatorId } = creator;

  return (
    <li className="event__list-item" key={_id}>
      <div>
        <h1>{title}</h1>
        <h2>
          ${price} - {new Date(date).toLocaleDateString()}
        </h2>
      </div>
      <div>
        {creatorId === userId ? (
          <p>You are the owner of this event</p>
        ) : (
          <button type="button" className="btn" onClick={() => onDetail(_id)}>
            View Details
          </button>
        )}
      </div>
    </li>
  );
};

export default EventItem;
