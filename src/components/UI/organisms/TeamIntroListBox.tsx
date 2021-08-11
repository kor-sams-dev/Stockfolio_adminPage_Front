import React from "react";
import styled from "styled-components";

import theme from "../../../styles/theme";
import Heading3 from "../atoms/texts/Heading3";

const TeamIntroList = styled.ul`
  padding: 10px 0;
  width: 100%;
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
    margin-left: 160px;
  }
`;

const MemberMoto = styled.span`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 160px;
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
    background: rgba(79, 44, 224, 0.7);
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
  color: ${theme.color.desc};
  font-size: 16px;
  font-weight: 500;
`;

const MemberName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

function TeamIntroListBox(): JSX.Element {
  return (
    <TeamIntroList>
      <DepartmentBox>
        <Heading3 fontWeight={700}>리더십</Heading3>
        <MemberList>
          <MemberCard>
            <MemberImgBox>
              <img alt="CEO" src="./images/teamImg/CEO.png" />
              <MemberMoto>I don’t jump, I dive in it</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>CEO</MemberRole>
              <MemberName>오연우</MemberName>
            </MemberInfo>
          </MemberCard>
          <MemberCard>
            <MemberImgBox>
              <img alt="COO" src="./images/teamImg/COO.png" />
              <MemberMoto>We’ll make it rock</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>COO</MemberRole>
              <MemberName>조기영</MemberName>
            </MemberInfo>
          </MemberCard>
          <MemberCard>
            <MemberImgBox>
              <img alt="CTO" src="./images/teamImg/CTO.png" />
              <MemberMoto>살려주세요</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>CTO</MemberRole>
              <MemberName>이재성</MemberName>
            </MemberInfo>
          </MemberCard>
        </MemberList>
      </DepartmentBox>
      <DepartmentBox>
        <Heading3 fontWeight={700}>프로덕트</Heading3>
        <MemberList>
          <MemberCard>
            <MemberImgBox>
              <img alt="Front-end Developer" src="./images/teamImg/FE.png" />
              <MemberMoto>2D는 사랑이야</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>Front-end Developer</MemberRole>
              <MemberName>송치원</MemberName>
            </MemberInfo>
          </MemberCard>
          <MemberCard>
            <MemberImgBox>
              <img alt="UI/UX Designer" src="./images/teamImg/Designer.png" />
              <MemberMoto>인생은 한번뿐이니까</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>UI/UX Designer</MemberRole>
              <MemberName>하영진</MemberName>
            </MemberInfo>
          </MemberCard>
          <MemberCard>
            <MemberImgBox>
              <img alt="Design Intern" src="./images/teamImg/Intern.png" />
              <MemberMoto>저질러버려따</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>Design Intern</MemberRole>
              <MemberName>안수하</MemberName>
            </MemberInfo>
          </MemberCard>
        </MemberList>
      </DepartmentBox>
      <DepartmentBox>
        <Heading3 fontWeight={700}>마케팅</Heading3>
        <MemberList>
          <MemberCard>
            <MemberImgBox>
              <img
                alt="Performance Marketer"
                src="./images/teamImg/PM-cutout.png"
              />
              <MemberMoto>
                cuando cree que es muy tarde, ya había demaciado tarde
              </MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>Performance Marketer</MemberRole>
              <MemberName>홍탁의</MemberName>
            </MemberInfo>
          </MemberCard>
          <MemberCard>
            <MemberImgBox>
              <img alt="Content Marketer" src="./images/teamImg/CM.png" />
              <MemberMoto>이 구역의 개복치</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>Content Marketer</MemberRole>
              <MemberName>신지혜</MemberName>
            </MemberInfo>
          </MemberCard>
        </MemberList>
      </DepartmentBox>
      <DepartmentBox>
        <Heading3 fontWeight={700}>크리에이터</Heading3>
        <MemberList>
          <MemberCard>
            <MemberImgBox>
              <img alt="Video Editor" src="./images/teamImg/Editor.png" />
              <MemberMoto>커피 중독자</MemberMoto>
            </MemberImgBox>
            <MemberInfo>
              <MemberRole>Video Editor</MemberRole>
              <MemberName>황준성</MemberName>
            </MemberInfo>
          </MemberCard>
        </MemberList>
      </DepartmentBox>
    </TeamIntroList>
  );
}

export default TeamIntroListBox;
