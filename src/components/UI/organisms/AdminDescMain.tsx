import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { Recruits } from "../../../config";

import Heading2 from "../atoms/texts/Heading2";
import Label from "../atoms/Labels/Label";
import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { IDProp } from "../../../models/applyInterfaces";

const ApplyMain = styled.section`
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-start; */
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

const Sidebutton = styled.div`
  font-size: 14px;
  margin-right: 16px;
  cursor: pointer;
  color: ${theme.color.grey2};
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sidewrap = styled.div`
  display: flex;

  span {
    font-size: 14px;
    margin-left: 11px;
  }
`;
const AdminDescMain = observer((): JSX.Element => {
  const { ApplyMenuStore, SelectedContent } = RootStore();
  const { setSelectedContent } = ApplyMenuStore;
  const params: IDProp = useParams();
  const history = useHistory();
  console.log(params);

  useEffect(() => {
    fetch(`${Recruits}/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedContent(data.result);
      });
  }, []);

  return (
    <ApplyMain>
      <Wrap>
        <Label stance={"신입" as "경력" | "신입"} />
        <Sidewrap>
          <Sidebutton>수정</Sidebutton>
          <Sidebutton>삭제</Sidebutton>
          <span>게시자 : 조기영</span>
        </Sidewrap>
      </Wrap>
      <InfoBox>
        <HeadBox>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            {SelectedContent.position_title}
          </Heading2>
          <DeadlineWrapper>
            <Employment>{SelectedContent.work_type}</Employment>
            <Deadline>{SelectedContent.deadline} 마감</Deadline>
          </DeadlineWrapper>
        </HeadBox>
        <BtnBox>
          <ModRecruitBtn>지원자 리스트(5)</ModRecruitBtn>
        </BtnBox>
      </InfoBox>
      <DescriptionBox>
        <Desc
          fontColor={theme.color.black}
          fontSize={14}
          fontWeight={400}
          lineHeight={1.5}
        >
          {SelectedContent.description}
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
  );
});

export default AdminDescMain;
