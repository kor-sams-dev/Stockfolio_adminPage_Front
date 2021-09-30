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
  `;

  const Text = styled.span`
    color: ${theme.color.mainDeep};
    font-weight: 500;
    font-size: 20px;
  `;

  return (
    <Box>
      <Text>페이지를 불러오는 중입니다</Text>
    </Box>
  );
};

export default NotFound;
