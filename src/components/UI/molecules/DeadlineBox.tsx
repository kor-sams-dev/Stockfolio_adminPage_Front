import React from "react";
import styled from "styled-components";

const DeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Employment = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const Deadline = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;

  &::before {
    content: "|";
    padding-right: 7px;
  }
`;

function DeadlineBox(): JSX.Element {
  return (
    <DeadlineWrapper>
      <Employment>정규직</Employment>
      <Deadline>2021-09-19 마감</Deadline>
    </DeadlineWrapper>
  );
}

export default DeadlineBox;
