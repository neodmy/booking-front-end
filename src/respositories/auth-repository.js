const fetchData = async (requestBody) => {
  const res = await fetch(process.env.REACT_APP_BOOKING_API_URL, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200 && res.status !== 201) {
    throw new Error("Failed");
  }

  const { data } = await res.json();
  return data;
};

const loginRequest = async (email, password) => {
  const requestBody = {
    query: `
          query {
            login(email: "${email}", password: "${password}") {
              userId
              token
              tokenExpiration
            }
          }
        `,
  };

  const {
    login: {
      userId: fetchedUserId,
      token: fetchedToken,
      tokenExpiration: fetchedTokenExpiration,
    },
  } = await fetchData(requestBody);
  return { fetchedUserId, fetchedToken, fetchedTokenExpiration };
};

const createUserRequest = async (email, password) => {
  const requestBody = {
    query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"}) {
              _id
              email
            }
          }
        `,
  };

  const {
    createUser: { _id: fetchedUserId, email: fetchedEmail },
  } = await fetchData(requestBody);
  return { fetchedUserId, fetchedEmail };
};

export { loginRequest, createUserRequest };
