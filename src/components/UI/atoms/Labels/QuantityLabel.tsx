import React from "react";
import styled from "styled-components";

import { QuantityLabelProps } from "../../../../models/commonInterfaces";
import theme from "../../../../styles/theme";

export const Text = styled.span`
  color: ${theme.color.black};
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 22px;
  background-color: ${theme.color.greyLight2};
  border-radius: 11px;
  transition: background-color 0.3s;
`;

function QuantityLabel({
  quantity,
  className,
}: QuantityLabelProps): JSX.Element {
  return (
    <Box className={className}>
      <Text>{quantity || 0}</Text>
    </Box>
  );
}

export default QuantityLabel;
