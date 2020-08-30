import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import RoutesContainer from "./components/RoutesContainer/RoutesContainer";
import { AuthProvider } from "./context/auth-context";
import { EventsProvider } from "./context/events-context";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventsProvider>
          <MainNavigation />
          <RoutesContainer />
        </EventsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
