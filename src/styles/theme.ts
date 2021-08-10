import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    Main: "#4F2CE0",
    Red: "#FF4D00",
    Desc: "#595E66",
    LightGrey: "#B1B1B1",
    BgGrey: "#DDDDDD",
    BgLightGrey: "#F5F5F5",
    BgLightBlue: "#F9FCFF",
  },
  mixin: {
    flex: (justify = "center", align = "center") => `
      display: flex;
      justify-content: ${justify};
      align-items: ${align};`,
  },
};

export default theme;
