import React from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";

interface IStateProps {
  isSuccess: boolean;
}

const ApplyLabel = ({ isSuccess }: IStateProps): JSX.Element => {
  const Box = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    padding: 30px 50px;
    background: ${theme.color.main};
    border-radius: 8px;
    z-index: 9;
  `;

  const Text = styled.span`
    color: ${theme.color.white};
    font-weight: 700;
  `;

  return (
    <Box>
      <Text>{isSuccess ? "지원이 완료되었습니다" : "오류가 발생했습니다"}</Text>
    </Box>
  );
};

export default ApplyLabel;
