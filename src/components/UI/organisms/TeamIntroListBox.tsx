import React from "react";
import styled from "styled-components";

import theme from "../../../styles/theme";
import Heading3 from "../atoms/texts/Heading3";

import teamInfo from "../../../assets/data/teamInfo";

const TeamIntroList = styled.ul`
  padding: 10px 0;
`;

const DepartmentBox = styled.li`
  padding: 30px 0;
`;

const MemberList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
`;

const MemberCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & + li {
    margin-left: 100px;
  }
`;

const MemberMoto = styled.span`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 155px;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  z-index: 9999;
`;

const MemberImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 25px;
  width: 200px;
  height: 200px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 50%;
  overflow: hidden;

  &:hover ${MemberMoto} {
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background 0.2s ease-in-out;
  }
  &:hover::before {
    background: rgba(79, 44, 224, 0.8);
  }

  img {
    object-fit: cover;
    z-index: -1;
  }
`;

const MemberInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 50px;
`;

const MemberRole = styled.span`
  color: ${theme.color.grey2};
  font-size: 16px;
  font-weight: 400;
`;

const MemberName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

function TeamIntroListBox(): JSX.Element {
  return (
    <TeamIntroList>
      {teamInfo.map(data => (
        <DepartmentBox key={data.departmentId}>
          <Heading3 fontWeight={700} fontColor={theme.color.black}>
            {data.departmentName}
          </Heading3>
          <MemberList>
            {data.member.map(member => (
              <MemberCard key={member.memberId}>
                <MemberImgBox>
                  <img alt={member.role} src={member.memberImg} />
                  <MemberMoto>{member.moto}</MemberMoto>
                </MemberImgBox>
                <MemberInfo>
                  <MemberRole>{member.role}</MemberRole>
                  <MemberName>{member.name}</MemberName>
                </MemberInfo>
              </MemberCard>
            ))}
          </MemberList>
        </DepartmentBox>
      ))}
    </TeamIntroList>
  );
}

export default TeamIntroListBox;
