import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import Recruit from "./components/pages/Recruit";
import AdminLogin from "./components/pages/AdminLogin";
import AdminAccount from "./components/templates/AdminAccount";
import AdminNotification from "./components/templates/AdminNotification";
import AdminNotiUpload from "./components/templates/AdminNotiUpload";

import Admin from "./components/pages/Admin";

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
        <Route exact path="/login" component={AdminLogin} />
        <Route exact path="/admin/account" component={AdminAccount} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/:id" component={Admin} />
        <Route exact path="/admin/notification" component={AdminNotification} />
        <Route
          exact
          path="/admin/notification/write"
          component={AdminNotiUpload}
        />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
