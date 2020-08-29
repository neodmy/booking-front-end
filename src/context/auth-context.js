import React, { useState, createContext } from "react";

import {
  loginRequest,
  createUserRequest,
} from "../respositories/auth-repository";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = async (email, password) => {
    const { fetchedToken, fetchedUserId } = await loginRequest(email, password);
    setToken(fetchedToken);
    setUserId(fetchedUserId);
  };

  const createUser = async (email, password) => {
    const { fetchedUserId } = await createUserRequest(email, password);
    setUserId(fetchedUserId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
