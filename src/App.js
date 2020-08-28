import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/bookings" component={BookingsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
