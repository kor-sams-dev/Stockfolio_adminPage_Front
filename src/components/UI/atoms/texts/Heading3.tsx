import React from "react";
import styled from "styled-components";

import { TextProps } from "../../../../models/commonInterfaces";

const H3 = styled.h3`
  color: ${({ fontColor }: TextProps) => fontColor};
  font-size: ${({ fontSize }: TextProps) =>
    fontSize ? `${fontSize}px` : "24px"};
  font-weight: ${({ fontWeight }: TextProps) => fontWeight};
`;

function Heading3({
  children,
  fontColor,
  fontSize,
  fontWeight,
}: TextProps): JSX.Element {
  return (
    <H3 fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </H3>
  );
}

export default Heading3;
