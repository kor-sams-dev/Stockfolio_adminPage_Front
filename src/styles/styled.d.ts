import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      Main: string;
      Red: string;
      Desc: string;
      LightGrey: string;
      BgGrey: string;
      BgLightGrey: string;
      BgLightBlue: string;
    };
    mixin: {
      flex: (justify: Justify, align: Align) => string;
    };
  }
}
