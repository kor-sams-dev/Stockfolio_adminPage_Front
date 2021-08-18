import React from "react";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
