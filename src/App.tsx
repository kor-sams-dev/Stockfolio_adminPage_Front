import React from "react";

import Landing from "./components/pages/Landing";
// import Desc from "./components/UI/atoms/texts/Desc";
// import handleThemeKey from "./utils/handleThemeKey";

function App(): JSX.Element {
  return (
    <div className="App">
      <Landing />
      {/* <Desc fontColor={handleThemeKey("colorMain")}>왕춘식 최고</Desc> */}
    </div>
  );
}

export default App;
