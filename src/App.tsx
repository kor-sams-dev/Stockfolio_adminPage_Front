import React from "react";

import Nav from "./components/templates/Nav";
import TeamIntro from "./components/pages/TeamIntro";
import Application from "./components/templates/Application";
// import Landing from "./components/pages/Landing";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      {/* <TeamIntro /> */}
      {/* <Landing /> */}
      <Application />
    </div>
  );
}

export default App;
