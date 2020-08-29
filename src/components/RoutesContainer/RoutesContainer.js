import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "../../pages/Auth";
import BookingsPage from "../../pages/Bookings";
import EventsPage from "../../pages/Events";
import { AuthContext } from "../../context/auth-context";

const RoutesContainer = () => {
  const { token } = useContext(AuthContext);
  return (
    <main className="main-content">
      <Switch>
        {!token && <Redirect exact from="/" to="/auth" />}
        {token && <Redirect exact from="/" to="/events" />}
        {token && <Redirect exact from="/auth" to="/events" />}
        {!token && <Route path="/auth" component={AuthPage} />}
        <Route path="/events" component={EventsPage} />
        {token && <Route path="/bookings" component={BookingsPage} />}
      </Switch>
    </main>
  );
};

export default RoutesContainer;
