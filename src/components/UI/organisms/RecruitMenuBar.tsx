import React from "react";
import styled, { css } from "styled-components";
import { observer } from "mobx-react";
import { useHistory, useLocation } from "react-router-dom";

import theme from "../../../styles/theme";

interface ClickProps {
  isSelected: boolean;
}

const UnderLineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const RecruitMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecruitMenu = styled.li`
  position: relative;
  margin: 0 30px;
  padding: 15px;
  color: ${theme.color.lilac};
  font-weight: 400;
  transition: color 0.5s;
  ${({ isSelected }: ClickProps) =>
    isSelected
      ? css`
          border-bottom: 2px solid ${theme.color.mainDeep};
          color: ${theme.color.main};
          font-weight: 700;
          cursor: pointer;
        `
      : ""}

  &:hover {
    color: ${theme.color.main};
    font-weight: 700;
    cursor: pointer;

    &::before {
      width: 50%;
    }
    &::after {
      width: 50%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    width: 0%;
    height: 100%;
    border-bottom: 2px solid ${theme.color.mainDeep};
    transition: width 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: calc(50% - 1px);
    width: 0%;
    height: 100%;
    border-bottom: 2px solid ${theme.color.mainDeep};
    transition: width 0.5s;
  }
`;

function RecruitMenuBar(): JSX.Element {
  const menu = [
    {
      menuId: 0,
      name: "지원하기",
      addr: "apply",
    },
    {
      menuId: 1,
      name: "채용 과정",
      addr: "process",
    },
    {
      menuId: 2,
      name: "스폴러 소개",
      addr: "team",
    },
  ];
  const history = useHistory();
  const location = useLocation();
  const GoToMenu = (item: string) => {
    return history.push(`/recruit/${item}`);
  };

  return (
    <UnderLineBox>
      <RecruitMenuList>
        {menu.map(li => {
          return (
            <RecruitMenu
              key={li.menuId}
              isSelected={location.pathname === `/recruit/${li.addr}`}
              onClick={() => GoToMenu(li.addr)}
            >
              {li.name}
            </RecruitMenu>
          );
        })}
      </RecruitMenuList>
    </UnderLineBox>
  );
}

export default RecruitMenuBar;
