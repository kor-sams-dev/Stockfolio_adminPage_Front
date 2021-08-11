import React from "react";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
