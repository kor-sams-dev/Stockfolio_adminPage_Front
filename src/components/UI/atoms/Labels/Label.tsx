import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const Box = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colorBgGrey}`};
`;

const Text = styled.span`
  font-size: 14px;
`;

function Label({ children }: ChildrenPropsType): JSX.Element {
  return (
    <Box>
      <Text>{children}</Text>
    </Box>
  );
}

export default Label;
