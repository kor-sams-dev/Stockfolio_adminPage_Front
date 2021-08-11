import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      red: string;
      desc: string;
      lightGrey: string;
      bgGrey: string;
      bgLightGrey: string;
      bgLightBlue: string;
    };
  }
}
