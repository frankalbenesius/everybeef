import { Container } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BeefPage } from "./pages/BeefPage";
import { IndexPage } from "./pages/IndexPage";

export function App() {
  return (
    <Router>
      <Container maxW="container.lg">
        <Switch>
          <Route path="/beefs/:id">
            <BeefPage />
          </Route>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}
