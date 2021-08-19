import React from "react";
import styled from "styled-components";

import theme from "../../../styles/theme";

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
  return (
    <UnderLineBox>
      <RecruitMenuList>
        <RecruitMenu>지원하기</RecruitMenu>
        <RecruitMenu>채용 과정</RecruitMenu>
        <RecruitMenu>스폴러 소개</RecruitMenu>
      </RecruitMenuList>
    </UnderLineBox>
  );
}

export default RecruitMenuBar;
