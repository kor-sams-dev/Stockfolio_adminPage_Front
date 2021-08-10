// import { DefaultMixin } from "styled-components";

const mixin = {
  flexMixin: (justify = "center", align = "center"): string => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align}`,
};

export default mixin;
