import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";
import QuantityLabel, { Text, Box } from "../atoms/Labels/QuantityLabel";
import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { MenuProps } from "../../../models/applyInterfaces";

const ApplyNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

const Boxs = styled.div`
  display: flex;
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

const Sort = styled.div`
  font-size: 14px;
  display: flex;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.color.grey2};
  }
`;

const SortText = styled.div<{ isActive: boolean }>`
  font-size: 14px;
  margin: 0px 16px;
  color: ${props =>
    props.isActive ? `${theme.color.black}` : `${theme.color.grey2}`};
  font-weight: ${props => (props.isActive ? 700 : 400)};
`;

const ApplyNavBar = observer((): JSX.Element => {
  const department = ["전체", "개발", "디자인", "마케팅"];
  const { ApplyMenuStore } = RootStore();
  const { clicked, totalContent } = ApplyMenuStore;
  const location = useLocation();

  useEffect(() => {
    const setDepartment = (arr: any) => {
      return arr.position === clicked;
    };

    if (ApplyMenuStore.clicked === "전체") {
      ApplyMenuStore.setViewContent(totalContent);
    } else {
      ApplyMenuStore.setViewContent(totalContent.filter(setDepartment));
    }
  }, [ApplyMenuStore.clicked]);

  useEffect(() => {
    const date = (a: any, b: any) => {
      if (a.deadline > b.deadline) {
        return -1;
      }
      if (a.deadline < b.deadline) {
        return 1;
      }
      return 0;
    };

    const salary = (a: any, b: any) => {
      if (a.maximum_salary > b.maximum_salary) {
        return -1;
      }
      if (a.maximum_salary < b.maximum_salary) {
        return 1;
      }
      return 0;
    };

    if (ApplyMenuStore.clicked === "마감순") {
      ApplyMenuStore.setViewContent(totalContent.sort(date));
    } else if (ApplyMenuStore.clicked === "인기순") {
      ApplyMenuStore.setViewContent(totalContent);
    } else if (ApplyMenuStore.clicked === "연봉순") {
      ApplyMenuStore.setViewContent(totalContent.sort(salary));
    }
  }, [ApplyMenuStore.clicked]);

  return (
    <ApplyNav>
      <Boxs>
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
              {item === "전체" ? (
                <QuantityLabel quantity={ApplyMenuStore.totalContent.length} />
              ) : (
                <QuantityLabel
                  quantity={
                    ApplyMenuStore.totalContent.filter(
                      (el: MenuProps) => el.position === item
                    ).length
                  }
                />
              )}
            </IsActive>
          );
        })}
      </Boxs>
      {location.pathname === "/recruit/apply" && (
        <Sort>
          <SortText
            onClick={() => {
              ApplyMenuStore.setClicked("마감순");
            }}
            isActive={ApplyMenuStore.clicked === "마감순"}
          >
            마감순
          </SortText>
          <span>|</span>
          {/* <SortText
            onClick={() => {
              ApplyMenuStore.setClicked("인기순");
            }}
          >
            인기순
          </SortText>
          <span>|</span> */}
          <SortText
            onClick={() => {
              ApplyMenuStore.setClicked("연봉순");
            }}
            isActive={ApplyMenuStore.clicked === "연봉순"}
          >
            연봉순
          </SortText>
        </Sort>
      )}
    </ApplyNav>
  );
});

export default ApplyNavBar;
