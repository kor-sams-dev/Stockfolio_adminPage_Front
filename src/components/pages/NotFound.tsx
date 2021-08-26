import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const NotFound = (): JSX.Element => {
  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 177px);
    background: ${theme.color.greyLight2};
  `;

  const Text = styled.span`
    color: ${theme.color.mainDeep};
    font-weight: 500;
    font-size: 20px;
  `;

  return (
    <Box>
      <Text>존재하지 않는 페이지입니다</Text>
    </Box>
  );
};

export default NotFound;
