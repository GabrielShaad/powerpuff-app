import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Show } from "./components/Show";
import { Episode } from "./components/Episode";

// Define routing logic and mount application
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Show />
        </Route>
        <Route path="/episode/:episodeId">
          <Episode />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
