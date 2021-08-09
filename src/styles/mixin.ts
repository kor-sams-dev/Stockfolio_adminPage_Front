// import { DefaultMixin } from "styled-components";

const mixin: any = {
  flexMixin: (justify = "center", align = "center"): string => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align}`,
};

export default mixin;
