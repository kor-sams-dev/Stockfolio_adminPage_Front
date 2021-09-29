import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";

import { ApplicantApi } from "../../config";
import { applicantForm } from "../../models/AdminAccountInterface";
import requestHeaders from "../../utils/getToken";

import ApplicantTitle from "../UI/organisms/ApplicantTitle";
import ApplicantBasicInfo from "../UI/organisms/ApplicantBasicInfo";
import ApplicantCareer from "../UI/organisms/ApplicantCareer";
import ApplicantProject from "../UI/organisms/ApplicantProject";
import ApplicantIntroduce from "../UI/organisms/ApplicantIntroduce";
import ApplicantEducation from "../UI/organisms/ApplicantEducation";
import ApplicantPortfolio from "../UI/organisms/ApplicantPortfolio";
import ApplicantCommentBox from "../UI/organisms/ApplicantCommentBox";

const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: 100px;
  background: ${theme.color.white};
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
  margin-left: 40px;
  margin-bottom: 40px;
  padding: 15px;
  width: 350px;
  height: 100vh;
  overflow-y: scroll;
`;

const AdminApplicant = observer((): JSX.Element => {
  const Location = useLocation();
  const applicantId = Location.pathname.slice(17, Location.pathname.length);

  const [applicantData, setApplicantData] = useState(applicantForm);
  useEffect(() => {
    fetch(`${ApplicantApi}/${applicantId}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicantData(data.results);
      });

    fetch(`${ApplicantApi}/${applicantId}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicantData(data.results);
      });
  }, []);

  const TitleData = applicantData;
  const basicInfoData = applicantData.content?.basicInfo;
  const introduceData = applicantData.content?.introduction;
  const EducationData = applicantData.content?.education;
  const PortfolioData = applicantData.content?.portfolio;

  return (
    <Box>
      <Inner size="wide">
        <ApplicantWrap>
          <ContentSection>
            <ApplicantTitle item={basicInfoData!} data={TitleData!} />
            <ApplicantBasicInfo item={basicInfoData!} />
            {applicantData.content?.career.map((item: any) => {
              return <ApplicantCareer item={item} key={item} />;
            })}
            {applicantData.content?.project.map((item: any) => {
              return <ApplicantProject item={item} key={item} />;
            })}
            <ApplicantIntroduce item={introduceData!} />
            <ApplicantEducation item={EducationData!} />
            <ApplicantPortfolio item={PortfolioData!} />
          </ContentSection>
          <CommentSection>
            <ApplicantCommentBox data={basicInfoData!} />
          </CommentSection>
        </ApplicantWrap>
      </Inner>
    </Box>
  );
});

export default AdminApplicant;
