import React from "react";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import TeamIntro from "./components/pages/TeamIntro";
// import Landing from "./components/pages/Landing";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <TeamIntro />
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
