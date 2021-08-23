import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import Recruit from "./components/pages/Recruit";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/recruit" component={Recruit} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
