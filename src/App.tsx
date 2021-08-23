import React from "react";

import Nav from "./components/templates/Nav";
import Recruit from "./components/pages/Recruit";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import TeamIntro from "./components/pages/TeamIntro";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Recruit />
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
