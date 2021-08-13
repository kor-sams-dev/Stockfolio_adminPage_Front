import React from "react";
import styled from "styled-components";
import Inner from "../../../styles/Inner";
import theme from "../../../styles/theme";
import Label from "../atoms/Labels/Label";

import Heading2 from "../atoms/texts/Heading2";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 35px 0 86px;
`;

const Sort = styled.span`
  font-size: 14px;

  & + span {
    position: relative;
    padding-left: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      height: 10px;
      border-left: 1px solid ${theme.color.black};
    }
  }
`;

const ApplicationHeader = (): JSX.Element => {
  return (
    <Box>
      <Label>경력</Label>
      <Heading2 fontSize={48} fontWeight={700}>
        UI/UX 디자이너
      </Heading2>
      <div>
        <Sort>정규직</Sort>
        <Sort>2021-09-19까지</Sort>
      </div>
    </Box>
  );
};

export default ApplicationHeader;
