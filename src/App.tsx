import React from "react";

import Nav from "./components/templates/Nav";
import Recruit from "./components/pages/Recruit";
// import Landing from "./components/pages/Landing";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Recruit />
      {/* <Landing /> */}
    </div>
  );
}

export default App;
