import React from "react";
import styled from "styled-components";

import { TextProps } from "../../../../models/commonInterfaces";

const H4 = styled.h4`
  color: ${({ fontColor }: TextProps) => fontColor};
  font-size: ${({ fontSize }: TextProps) =>
    fontSize ? `${fontSize}px` : "20px"};
  font-weight: ${({ fontWeight }: TextProps) => fontWeight};
`;

function Heading4({
  children,
  fontColor,
  fontSize,
  fontWeight,
}: TextProps): JSX.Element {
  return (
    <H4 fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </H4>
  );
}

export default Heading4;
