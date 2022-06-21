import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
//  Link
} from "react-router-dom";

import { DashboardPage } from "../pages/dashboard-page";


const AuthenticatedRoute = ( {isAuthenticated, children, ...rest} ) => <Route
{...rest}
render={({ location }) =>
  isAuthenticated ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location }
      }}
    />
  )
}
/>

export const ClientRouter = () => <Router className="App">
  <div>
      <Switch>
          <Route exact path="/">
              <DashboardPage />
          </Route>
          <AuthenticatedRoute isAuthenticated={false} path="/dashboard">
            <p>sign in</p>
          </AuthenticatedRoute>
          <Route path="*">
            <DashboardPage />
          </Route>
      </Switch>
  </div>
</Router>