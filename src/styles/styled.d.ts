import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorMain: string;
    colorRed: string;
    colorDesc: string;
    colorLightGrey: string;
    colorBgGrey: string;
    colorBgLightGrey: string;
    colorBgLightBlue: string;
    flexMixin: function;
  }
}
