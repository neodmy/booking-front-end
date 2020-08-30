import fetchData from "./fetchData";

const createEventRequest = async ({
  title,
  price,
  date,
  description,
  token,
}) => {
  const requestBody = {
    query: `
          mutation {
            createEvent(eventInput: {title: "${title}", price: ${price}, date: "${date}", description: "${description}" }) {
              _id
              title
              description
              date
              price
              creator {
                  _id
                  email
              }
            }
          }
        `,
  };

  const { createEvent: event } = await fetchData(requestBody, token);

  return event;
};

const listEventsRequest = async () => {
  const requestBody = {
    query: `
            query {
              events {
                _id
                title
                description
                date
                price
                creator {
                    _id
                    email
                }
              }
            }
        `,
  };

  const { events } = await fetchData(requestBody);

  return events;
};

export { createEventRequest, listEventsRequest };
