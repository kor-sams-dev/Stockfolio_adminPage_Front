import React from "react";
import styled from "styled-components";

import theme from "../../../styles/theme";

const UnderLineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.bgGrey};
`;

const RecruitMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecruitMenu = styled.li`
  padding: 20px 10px;
  font-weight: 500;
  margin-left: 80px;

  &:hover {
    padding-bottom: 16px;
    color: ${theme.color.main};
    border-bottom: 4px solid ${theme.color.main};
    transition: all 0.1s;
    cursor: pointer;
  }
`;

function RecruitMenuBar(): JSX.Element {
  return (
    <UnderLineBox>
      <RecruitMenuList>
        <RecruitMenu>지원하기</RecruitMenu>
        <RecruitMenu>스폴 팀원 영입</RecruitMenu>
        <RecruitMenu>스폴러 소개 & 인터뷰</RecruitMenu>
      </RecruitMenuList>
    </UnderLineBox>
  );
}

export default RecruitMenuBar;
