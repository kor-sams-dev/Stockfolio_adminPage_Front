import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      red: string;
      black: string;
      descDark: string;
      descMedium: string;
      descLight: string;
      lightGrey: string;
      bgFooter: string;
      bgLight: string;
      bgGrey: string;
      bgLightGrey: string;
      bgLightBlue: string;
    };
  }
}
