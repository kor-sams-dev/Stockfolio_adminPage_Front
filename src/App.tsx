import React from "react";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import TeamIntro from "./components/pages/TeamIntro";
import Label from "./components/UI/atoms/Labels/Label";
import ApplyList from "./components/templates/ApplyList";
// import Landing from "./components/pages/Landing";

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      {/* <TeamIntro /> */}
      <ApplyList />
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
