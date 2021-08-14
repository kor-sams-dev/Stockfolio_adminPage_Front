import React from "react";
import styled from "styled-components";

import { QuantityLabelProps } from "../../../../models/commonInterfaces";
import theme from "../../../../styles/theme";

const Text = styled.span`
  color: ${theme.color.black};
  font-size: 14px;
  font-weight: 700;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 22px;
  background-color: ${theme.color.greyLight2};
  border-radius: 11px;

  &:hover {
    background-color: ${theme.color.mainDeep};
  }

  &:hover ${Text} {
    color: ${theme.color.white};
  }
`;

function QuantityLabel({ quantity }: QuantityLabelProps): JSX.Element {
  return (
    <Box>
      <Text>{quantity || 0}</Text>
    </Box>
  );
}

export default QuantityLabel;
