import theme from "../styles/theme";

function handleThemeKey(key: keyof typeof theme): string {
  return theme[key];
}

export default handleThemeKey;
