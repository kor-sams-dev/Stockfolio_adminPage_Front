import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import Recruit from "./components/pages/Recruit";
<<<<<<< HEAD
import AdminMain from "./components/pages/AdminMain";
=======
import AdminAccount from "./components/templates/AdminAccount";
>>>>>>> develop

function App(): JSX.Element {
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
        <Route exact path="/recruit/process" component={Recruit} />
        <Route exact path="/recruit/team" component={Recruit} />
<<<<<<< HEAD
        <Route exact path="/main" component={AdminMain} />
=======
        <Route exact path="/admin/account" component={AdminAccount} />
>>>>>>> develop
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
