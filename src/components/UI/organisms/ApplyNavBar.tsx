import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import QuantityLabel, { Text, Box } from "../atoms/Labels/QuantityLabel";
import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { MenuProps } from "../../../models/applyInterfaces";

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
  cursor: pointer;

  & + li {
    padding-left: 24px;
  }

  ${PositionName} {
    color: ${theme.color.mainDeep};
    transition: color 0.3s;
  }

  ${Box} {
    background-color: ${theme.color.mainDeep};
    transition: background-color 0.3s;
  }

  ${Text} {
    color: ${theme.color.white};
    transition: color 0.3s;
  }
`;

const NonePositionList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  & + li {
    padding-left: 24px;
  }
`;

const ApplyNavBar = observer((): JSX.Element => {
  const department = ["개발", "디자인", "마케팅"];
  const { ApplyMenuStore } = RootStore();
  const { clicked, totalContent } = ApplyMenuStore;

  useEffect(() => {
    const setDepartment = (arr: any) => {
      if (arr.position === clicked) {
        return true;
      }
      return false;
    };

    ApplyMenuStore.setViewContent(totalContent.filter(setDepartment));
  }, [ApplyMenuStore.clicked]);

  return (
    <ApplyNav>
      {department.map(item => {
        const IsActive = item === clicked ? PositionList : NonePositionList;
        return (
          <IsActive
            key={item}
            onClick={() => {
              ApplyMenuStore.setClicked(item);
            }}
          >
            <PositionName>{item}</PositionName>
            <QuantityLabel
              quantity={
                ApplyMenuStore.totalContent.filter(function (el: MenuProps) {
                  return el.position === item;
                }).length
              }
            />
          </IsActive>
        );
      })}
    </ApplyNav>
  );
});

export default ApplyNavBar;
