import React from "react";
import styled from "styled-components";

import QuantityLabel from "../atoms/Labels/QuantityLabel";
import theme from "../../../styles/theme";

const ApplyNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
`;

const PositionName = styled.span`
  padding-right: 4px;
  font-size: 14px;
  font-weight: 700;
`;

const PositionList = styled.li`
  display: flex;
  align-items: center;

  & + li {
    padding-left: 24px;
  }

  &:hover ${PositionName} {
    color: ${theme.color.mainDeep};
  }
`;

function ApplyNavBar(): JSX.Element {
  return (
    <ApplyNav>
      <PositionList>
        <PositionName>개발</PositionName>
        <QuantityLabel quantity={20} />
      </PositionList>
      <PositionList>
        <PositionName>디자인</PositionName>
        <QuantityLabel quantity={14} />
      </PositionList>
      <PositionList>
        <PositionName>마케팅</PositionName>
        <QuantityLabel quantity={3} />
      </PositionList>
    </ApplyNav>
  );
}

export default ApplyNavBar;
