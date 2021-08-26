import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import Recruit from "./components/pages/Recruit";

function App(): JSX.Element {
  const path = [];
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/recruit" component={Recruit} />
        <Route exact path="/recruit/apply" component={Recruit} />
        <Route exact path="/recruit/apply/:id" component={Recruit} />
        <Route exact path="/recruit/apply/:id/register" component={Recruit} />
        <Route exact path="/recruit/apply/:id/modify" component={Recruit} />
        <Route exact path="/recruit/apply/:id/resume" component={Recruit} />
        {/* <Route exact path="/recruit/apply/:id/resume" component={Recruit} /> */}
        {/* <Route exact path="/recruit/apply/:id/register/resume" component={Recruit} />
        <Route exact path="/recruit/apply/:id/modify" component={Recruit} />
        <Route exact path="/recruit/apply/:id/modify/resume" component={Recruit} /> */}
        <Route exact path="/recruit/process" component={Recruit} />
        <Route exact path="/recruit/team" component={Recruit} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
