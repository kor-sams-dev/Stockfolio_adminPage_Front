import React from "react";
import styled from "styled-components";

import { LabelProps } from "../../../../models/commonInterfaces";

const Box = styled.div`
  border: ${({ labelColor }: LabelProps) => `1px solid ${labelColor}`};
  width: ${({ labelWidth }: LabelProps) => `${labelWidth}px`};
`;

const Text = styled.span`
  font-size: ${({ fontSize }: LabelProps) => `${fontSize}px`};
  color: ${({ fontColor }: LabelProps) => fontColor};
  font-weight: ${({ fontWeight }: LabelProps) => fontWeight};
`;

function Label({
  children,
  labelColor,
  labelWidth,
  fontColor,
  fontSize,
  fontWeight,
}: LabelProps): JSX.Element {
  return (
    <Box labelColor={labelColor} labelWidth={labelWidth}>
      <Text
        labelColor={labelColor}
        labelWidth={labelWidth}
        fontColor={fontColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Text>
    </Box>
  );
}

export default Label;
