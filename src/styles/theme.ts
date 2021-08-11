const theme = {
  colorMain: "#4F2CE0",
  colorRed: "#FF4D00",
  colorDesc: "#595E66",
  colorLightGrey: "#B1B1B1",
  colorBgGrey: "#DDDDDD",
  colorBgLightGrey: "#F5F5F5",
  colorBgLightBlue: "#F9FCFF",
  flexMixin: (justify = "center", align = "center"): string => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align}`,
};

export default theme;
