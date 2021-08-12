import React from "react";
import styled from "styled-components";

import { TextProps } from "../../../../models/commonInterfaces";

const H2 = styled.h2`
  color: ${({ fontColor }: TextProps) => fontColor};
  font-size: ${({ fontSize }: TextProps) =>
    fontSize ? `${fontSize}px` : "32px"};
  font-weight: ${({ fontWeight }: TextProps) => fontWeight};
`;

function Heading2({
  children,
  fontColor,
  fontSize,
  fontWeight,
}: TextProps): JSX.Element {
  return (
    <H2 fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </H2>
  );
}

export default Heading2;
