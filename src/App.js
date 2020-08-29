import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import RoutesContainer from "./components/RoutesContainer/RoutesContainer";
import { AuthProvider } from "./context/auth-context";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainNavigation />
        <RoutesContainer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
