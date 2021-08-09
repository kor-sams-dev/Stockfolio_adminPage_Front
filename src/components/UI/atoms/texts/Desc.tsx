import React from "react";
import styled from "styled-components";

import { DescProps } from "../../../../models/commonInterfaces";

const Text = styled.p.attrs((props: DescProps) => ({
  fontColor: props.fontColor,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  lineHeight: props.lineHeight,
}))`
  color: ${({ fontColor }: DescProps) => `${fontColor}`};
  font-size: ${({ fontSize }: DescProps) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: DescProps) => `${fontWeight}`};
  line-height: ${({ lineHeight }: DescProps) => `${lineHeight}`};
`;

function Desc({
  children,
  fontColor,
  fontSize,
  fontWeight,
  lineHeight,
}: DescProps): JSX.Element {
  return (
    <Text
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  );
}

export default Desc;
