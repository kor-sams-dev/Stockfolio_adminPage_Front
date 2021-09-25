import React, { useEffect } from "react";
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

const AdminApplyNavbar = observer((): JSX.Element => {
  const department = ["전체", "개발", "디자인", "마케팅"];
  const { AdminApplyMenuStore } = RootStore();
  const { adminclicked, admintotalContent } = AdminApplyMenuStore;

  useEffect(() => {
    const setDepartment = (arr: any) => {
      return arr.position === adminclicked;
    };

    if (AdminApplyMenuStore.adminclicked === "전체") {
      AdminApplyMenuStore.setViewContentAdmin(admintotalContent);
    } else {
      AdminApplyMenuStore.setViewContentAdmin(
        admintotalContent.filter(setDepartment)
      );
    }
    // 배열의 포지션이 click 인것만 반환
    // console.log(ApplyMenuStore.setViewContent);
    // console.log(admintotalContent.filter(setDepartment));
  }, [AdminApplyMenuStore.adminclicked]);

  return (
    <ApplyNav>
      {department.map(item => {
        const IsActive =
          item === adminclicked ? PositionList : NonePositionList;
        return (
          <IsActive
            key={item}
            onClick={() => {
              AdminApplyMenuStore.setClickedAdmin(item);
            }}
          >
            <PositionName>{item}</PositionName>
            {item === "전체" ? (
              <QuantityLabel
                quantity={AdminApplyMenuStore.admintotalContent.length}
              />
            ) : (
              <QuantityLabel
                quantity={
                  AdminApplyMenuStore.admintotalContent.filter(function (
                    el: MenuProps
                  ) {
                    return el.position === item;
                  }).length
                }
              />
            )}
          </IsActive>
        );
      })}
    </ApplyNav>
  );
});

export default AdminApplyNavbar;
