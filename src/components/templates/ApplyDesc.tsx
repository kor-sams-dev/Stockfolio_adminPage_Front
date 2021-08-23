import React from "react";
import styled from "styled-components";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";
import Label from "../UI/atoms/Labels/Label";
import Desc from "../UI/atoms/texts/Desc";

const DescWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ApplySide = styled.aside``;

const RecruitList = styled.ul``;

const RecruitHeadline = styled.h2`
  color: ${theme.color.black};
  font-size: 14px;
  font-weight: 700;
`;

const RecruitDeadline = styled.span`
  color: ${theme.color.grey2};
  font-size: 12px;
  font-weight: 400;
`;

const RecruitCard = styled.li`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 16px;
  width: 180px;
  height: 88px;
  border-radius: 16px;
  background-color: ${theme.color.greyLight1};
  cursor: pointer;

  & + li {
    margin-top: 12px;
  }

  &:hover {
    background-color: ${theme.color.lilacLight};
  }

  &:hover ${RecruitHeadline} {
    color: ${theme.color.main};
  }

  &:hover ${RecruitDeadline} {
    color: ${theme.color.lilac};
  }
`;

const ApplyMain = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 80px 40px;
  padding: 40px 32px 60px 32px;
  width: 736px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;
`;

const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Employment = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const Deadline = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;

  &::before {
    content: "|";
    padding-right: 7px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RecruitBtn = styled.button`
  width: 180px;
  height: 54px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const ModRecruitBtn = styled.button`
  margin-top: 8px;
  width: 180px;
  height: 54px;
  border: 1px solid ${theme.color.grey1};
  border-radius: 8px;
  background-color: ${theme.color.white};
  color: ${theme.color.descDark};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const DescriptionBox = styled.div`
  padding-top: 40px;
`;

const DescList = styled.ul`
  margin-top: 40px;

  em {
    font-size: 14px;
    font-weight: 700;
  }

  li {
    padding-top: 10px;
    list-style: disc inside;
    font-size: 14px;
    font-weight: 400;
    line-height: 0.6;

    & + li {
      padding-top: 10px;
    }
  }
`;

function ApplyDesc(): JSX.Element {
  return (
    <>
      <ApplyNavBar />
      <DescWrapper>
        <ApplySide>
          <RecruitList>
            <RecruitCard>
              <RecruitHeadline>UI/UX 디자이너 모집</RecruitHeadline>
              <RecruitDeadline>2021-09-19까지</RecruitDeadline>
            </RecruitCard>
            <RecruitCard>
              <RecruitHeadline>UX 디자인 인턴</RecruitHeadline>
              <RecruitDeadline>2021-09-19까지</RecruitDeadline>
            </RecruitCard>
            <RecruitCard>
              <RecruitHeadline>컨텐츠 마케터</RecruitHeadline>
              <RecruitDeadline>2021-09-19까지</RecruitDeadline>
            </RecruitCard>
          </RecruitList>
        </ApplySide>
        <ApplyMain>
          <Label stance="senior" />
          <InfoBox>
            <HeadBox>
              <Heading2
                fontColor={theme.color.black}
                fontSize={24}
                fontWeight={700}
              >
                UI/UX 디자이너 모집
              </Heading2>
              <DeadlineWrapper>
                <Employment>정규직</Employment>
                <Deadline>2021-09-19 마감</Deadline>
              </DeadlineWrapper>
            </HeadBox>
            <BtnBox>
              <RecruitBtn>지원하기</RecruitBtn>
              <ModRecruitBtn>이미 지원하셨나요?</ModRecruitBtn>
            </BtnBox>
          </InfoBox>
          <DescriptionBox>
            <Desc
              fontColor={theme.color.black}
              fontSize={14}
              fontWeight={400}
              lineHeight={1.5}
            >
              ‘스톡폴리오’는 공정성을 추구하는 크리에이터에게 편리한 환경을 조성
              및 제공해주는 스타트업입니다. 누구나 크리에이터가 될 수 있도록
              콘텐츠 템플릿을 제공하는 스톡폴리오는 공정한 콘텐츠의 선순환
              생태계를 마들며 임직원이 함께 성장해 나가는 것을 목표로 합니다.
            </Desc>
            <DescList>
              <em>담당 업무</em>
              <li>플랫폼 디자인 전반적인 업무</li>
              <li>앱 UI/UX 설계 및 디자인</li>
            </DescList>
            <DescList>
              <em>자격 요건</em>
              <li>구분: 경력(3년 이상)</li>
              <li>sketch, figma, zeplin, xd 중 1개 이상 사용 경험</li>
              <li>앱, 웹에 대한 이해도가 있는 분</li>
              <li>앱 디자인 경험과 높은 이해도</li>
              <li>포트폴리오 필수</li>
              <li>디자인 관련 학과 졸업 또는 졸업 예정자</li>
              <li>경력 1년 이상(UI/UX 경험만 인정됨)</li>
            </DescList>
            <DescList>
              <em>우대 사항</em>
              <li>구분: 경력(3년 이상)</li>
              <li>sketch, figma, zeplin, xd 중 1개 이상 사용 경험</li>
              <li>앱, 웹에 대한 이해도가 있는 분</li>
              <li>앱 디자인 경험과 높은 이해도</li>
              <li>포트폴리오 필수</li>
              <li>디자인 관련 학과 졸업 또는 졸업 예정자</li>
              <li>경력 1년 이상(UI/UX 경험만 인정됨)</li>
            </DescList>
          </DescriptionBox>
        </ApplyMain>
      </DescWrapper>
    </>
  );
}

export default ApplyDesc;
