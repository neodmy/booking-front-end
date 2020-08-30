import fetchData from "./fetchData";

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
