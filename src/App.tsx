import React from "react";

import Nav from "./components/templates/Nav";
import TeamIntro from "./components/pages/TeamIntro";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <TeamIntro />
    </div>
  );
}

export default App;
