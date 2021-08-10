import theme from "../styles/theme";

function handleThemeKey(key: keyof typeof theme.color): string {
  return theme.color[key];
}

export default handleThemeKey;
