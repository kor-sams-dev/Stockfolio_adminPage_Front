import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import QuantityLabel, { Text, Box } from "../atoms/Labels/QuantityLabel";
import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { MenuProps } from "../../../models/applyInterfaces";

interface ClickProps {
  isActive: boolean;
}

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
    transition: color 0.3s;
  }

  &:hover ${Box} {
    background-color: ${theme.color.mainDeep};
    transition: background-color 0.3s;
  }

  &:hover ${Text} {
    color: ${theme.color.white};
    transition: color 0.3s;
  }
`;

const ApplyNavBar = observer((): JSX.Element => {
  const department = ["개발", "디자인", "마케팅"];
  const { ApplyMenuStore } = RootStore();

  return (
    <ApplyNav>
      {department.map(item => (
        <PositionList
          key={item}
          onClick={() => ApplyMenuStore.setClicked(item)}
        >
          <PositionName>{item}</PositionName>
          <QuantityLabel
            quantity={
              ApplyMenuStore.totalContent.filter(function (el: MenuProps) {
                return el.position === item;
              }).length
            }
          />
        </PositionList>
      ))}
    </ApplyNav>
  );
});

export default ApplyNavBar;
