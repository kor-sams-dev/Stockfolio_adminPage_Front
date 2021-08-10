import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import Heading2 from "../UI/atoms/texts/Heading2";
import Heading3 from "../UI/atoms/texts/Heading3";

const TeamIntroBox = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "center")};
  flex-direction: column;
`;

const UnderLineBox = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "center")};
  margin-top: 100px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.LightGrey}`};
`;

const RecruitMenuList = styled.ul`
  ${({ theme }) => theme.mixin.flex("space-between", "center")};
`;

const RecruitMenu = styled.li`
  padding: 20px 0;
  font-weight: 500;
  margin-left: 80px;

  &:hover {
    padding-bottom: 15px;
    color: ${({ theme }) => `${theme.color.Main}`};
    border-bottom: ${({ theme }) => `4px solid ${theme.color.Main}`};
    cursor: pointer;
  }
`;

const OverViewBox = styled.div`
  ${({ theme }) => theme.mixin.flex("space-between", "normal")};
  flex-direction: column;
  padding: 60px 0;
  height: 230px;
  width: 610px;
`;

const TeamIntroList = styled.ul`
  padding: 10px 0;
  width: 100%;
`;

const DepartmentBox = styled.li`
  padding: 30px 0;
`;

const MemberList = styled.ul`
  ${({ theme }) => theme.mixin.flex("flex-start", "center")};
  padding: 30px 0;
`;

const MemberCard = styled.li`
  ${({ theme }) => theme.mixin.flex("space-between", "center")};
  flex-direction: column;

  & + li {
    margin-left: 160px;
  }
`;

const MemberImgBox = styled.div`
  ${({ theme }) => theme.mixin.flex("space-between", "center")};
  flex-direction: column;
  position: relative;
  margin-bottom: 25px;
  width: 200px;
  height: 200px;
  border: 1px solid #4f2ce0;
  border-radius: 50%;

  img {
    object-fit: cover;
  }

  &:hover {
    background-color: #4f2ce0;
  }
`;

const MemberMoto = styled.span`
  position: absolute;
  top: 50%;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const MemberInfo = styled.div`
  ${({ theme }) => theme.mixin.flex("space-between", "center")};
  flex-direction: column;
  height: 50px;
`;

const MemberRole = styled.span`
  color: #595e66;
  font-size: 16px;
  font-weight: 500;
`;

const MemberName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

function TeamIntro(): JSX.Element {
  return (
    <TeamIntroBox>
      <UnderLineBox>
        <RecruitMenuList>
          <RecruitMenu>지원하기</RecruitMenu>
          <RecruitMenu>스폴 팀원 영입</RecruitMenu>
          <RecruitMenu>스폴러 소개 & 인터뷰</RecruitMenu>
        </RecruitMenuList>
      </UnderLineBox>
      <Inner size="narrow">
        <OverViewBox>
          <Heading2 fontWeight={700}>스폴러 소개 & 인터뷰</Heading2>
          <Desc
            fontColor="#595E66"
            fontSize={16}
            fontWeight={400}
            lineHeight={1.5}
          >
            스폴러들은 넘치는 개성의 소유자에요. 물리학을 전공한 CEO부터
            스페인어에 능통한 마케터까지! 이러한 개성이 모여 스폴만의 톡톡 튀는
            사내문화가 형성되었죠. 매력쟁이 스폴러들을 만나보세요.
          </Desc>
        </OverViewBox>
        <TeamIntroList>
          <DepartmentBox>
            <Heading3 fontWeight={700}>리더십</Heading3>
            <MemberList>
              <MemberCard>
                <MemberImgBox>
                  <img alt="CEO" src="../../assets/images/CEO.png" />
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
                  <img
                    alt="Front-end Developer"
                    src="./images/teamImg/CEO.png"
                  />
                  <MemberMoto>2D는 사랑이야</MemberMoto>
                </MemberImgBox>
                <MemberInfo>
                  <MemberRole>Front-end Developer</MemberRole>
                  <MemberName>송치원</MemberName>
                </MemberInfo>
              </MemberCard>
              <MemberCard>
                <MemberImgBox>
                  <img alt="UI/UX Designer" src="./images/teamImg/COO.png" />
                  <MemberMoto>인생은 한번뿐이니까</MemberMoto>
                </MemberImgBox>
                <MemberInfo>
                  <MemberRole>UI/UX Designer</MemberRole>
                  <MemberName>하영진</MemberName>
                </MemberInfo>
              </MemberCard>
              <MemberCard>
                <MemberImgBox>
                  <img alt="Design Intern" src="./images/teamImg/CTO.png" />
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
                    src="./images/teamImg/CEO.png"
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
                  <img alt="Content Marketer" src="./images/teamImg/COO.png" />
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
                  <img alt="Video Editor" src="./images/teamImg/CEO.png" />
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
      </Inner>
    </TeamIntroBox>
  );
}

export default TeamIntro;
