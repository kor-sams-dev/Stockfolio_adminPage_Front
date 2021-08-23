import React from "react";

import Nav from "./components/templates/Nav";
import Footer from "./components/templates/Footer";
import Application from "./components/pages/Application";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
