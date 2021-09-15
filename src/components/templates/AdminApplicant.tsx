import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Inner from "../../styles/Inner";
import ApplicantTitle from "../UI/organisms/ApplicantTitle";
import ApplicantBasicInfo from "../UI/organisms/ApplicantBasicInfo";
import ApplicantCareer from "../UI/organisms/ApplicantCareer";
import ApplicantProject from "../UI/organisms/ApplicantProject";
import ApplicantIntroduce from "../UI/organisms/ApplicantIntroduce";
import ApplicantEducation from "../UI/organisms/ApplicantEducation";
import ApplicantPortfolio from "../UI/organisms/ApplicantPortfolio";
import ApplicantComment from "../UI/organisms/ApplicantComment";

import theme from "../../styles/theme";
import ApplicantData from "../../assets/data/adminApplicantData";

const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background: ${theme.color.white};
  padding-top: 100px;
`;

const ApplicantWrap = styled.div`
  display: flex;
  position: relative;
`;

const ContentSection = styled.section`
  padding-left: 20px;
  width: 70%;
`;

const CommentSection = styled.section`
  position: sticky;
  top: 100px;
  width: 300px;
  height: 100vh;
  margin-left: 40px;
`;

const CommentBox = styled.div`
  margin-top: 10px;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${theme.color.bgLightBlue};
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.color.blue};
`;

const AdminWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminAccount = styled.div`
  text-align: right;
  font-size: 6px;
  margin-bottom: 5px;
`;

const TimeDate = styled.span`
  color: ${theme.color.grey2};
  font-size: 6px;
  line-height: 1.5;
`;

const TextBox = styled.div`
  margin-top: 8px;
  font-size: 10px;
  line-height: 20px;
`;

const AdminApplicant = observer((): JSX.Element => {
  const basicInfoData = ApplicantData.result.content.basicInfo;
  const careerData = ApplicantData.result.content.career[0];
  const projectData = ApplicantData.result.content.project[0];
  const introduceData = ApplicantData.result.content.introduction;
  const EducationData = ApplicantData.result.content.education;
  const PortfolioData = ApplicantData.result.content.portfolio;

  const presentDate = new Date();

  return (
    <Box>
      <Inner size="wide">
        <ApplicantWrap>
          <ContentSection>
            <ApplicantTitle item={basicInfoData} />
            <ApplicantBasicInfo item={basicInfoData} />
            <ApplicantCareer item={careerData} />
            <ApplicantProject item={projectData} />
            <ApplicantIntroduce item={introduceData} />
            <ApplicantEducation item={EducationData} />
            <ApplicantPortfolio item={PortfolioData} />
          </ContentSection>
          <CommentSection>
            <ApplicantComment data={basicInfoData} />
            <CommentBox>
              <TitleWrap>
                <TitleText>뽑아요👍</TitleText>
                <AdminWrap>
                  <AdminAccount>조기영</AdminAccount>
                  <TimeDate>
                    {presentDate.getFullYear()}/{presentDate.getMonth()}/
                    {presentDate.getDate()}{" "}
                    {presentDate.getHours() >= 12 ? "오후" : "오전"}{" "}
                    {presentDate.getHours() >= 13
                      ? presentDate.getHours() - 12
                      : presentDate.getHours()}
                    :{presentDate.getMinutes()}
                  </TimeDate>
                </AdminWrap>
              </TitleWrap>
              <TextBox>
                죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주
                좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다.
                아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요.
                죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주
                좋아요. 죠습니다. 죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요.
                죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주
                좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다.
                아주 좋아요. 죠습니다. 아주 좋아요. 죠습니다. 아주 좋아요.
              </TextBox>
            </CommentBox>
          </CommentSection>
        </ApplicantWrap>
      </Inner>
    </Box>
  );
});

export default AdminApplicant;
