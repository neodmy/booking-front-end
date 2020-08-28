import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Redirect exact from="/" to="/auth" />
            <Route path="/auth" component={AuthPage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/bookings" component={BookingsPage} />
          </Switch>
        </main>
      </>
    </BrowserRouter>
  );
};

export default App;
