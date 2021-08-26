import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import Label from "../atoms/Labels/Label";
import Heading2 from "../atoms/texts/Heading2";

import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";

const { SelectedContent } = RootStore();

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 35px 0 86px;
`;

const LabelBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  const history = useHistory();

  useEffect(() => {
    if (SelectedContent.position_title === "") {
      history.push("/recruit");
    }
  });

  return (
    <Box>
      <LabelBox>
        <Label stance={SelectedContent.career_type as "경력" | "신입"} />
      </LabelBox>
      <Heading2 fontSize={48} fontWeight={700}>
        {SelectedContent.position_title}
      </Heading2>
      <div>
        <Sort>{SelectedContent.work_type}</Sort>
        <Sort>{SelectedContent.deadline}까지</Sort>
      </div>
    </Box>
  );
};

export default ApplicationHeader;
