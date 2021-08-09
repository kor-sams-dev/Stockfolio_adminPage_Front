import theme from "../styles/theme";

function handleThemeKey(key: keyof typeof theme) {
  return theme[key];
}

export default handleThemeKey;
