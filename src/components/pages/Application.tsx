import React from "react";
import styled from "styled-components";
import applicationForm from "../../assets/data/applicationForm";
import { IApplicationForm } from "../../models/ApplicationInterfaces";
import RootStore from "../../stores/RootStore";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";

import ApplicationHeader from "../UI/molecules/ApplicationHeader";
import ApplicationBasicInfo from "../UI/organisms/ApplicationBasicInfo";
import ApplicationCareer from "../UI/organisms/ApplicationCareer";
import ApplicationEducation from "../UI/organisms/ApplicationEducation";
import ApplicationIntroduction from "../UI/organisms/ApplicationIntroduction";
import ApplicationPortfolio from "../UI/organisms/ApplicationPortfolio";
import ApplicationProject from "../UI/organisms/ApplicationProject";

const { ApplicationStore } = RootStore();

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding: 176px 74px 0;
`;

const Form = styled.section`
  padding: 0 42px 120px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const handleCheckRequired = () => {
  const requiredArr = Object.entries(applicationForm)
    .filter(el => {
      const [sort, dataSet] = el;
      return dataSet.isRequired;
    })
    .map(el => el[0]);

  return requiredArr.forEach((el, idx) => {
    const requiredEl =
      ApplicationStore[requiredArr[idx] as keyof IApplicationForm];
    return Object.values(requiredEl).filter(item => item === null).length === 0;
  });
};

// 리스트 추가, required 검사

const handleSubmit = () => {
  // const isAllRequiredFilled = handleCheckRequired();
  console.log("submitted");

  // const formData = new FormData();
  // if (ApplicationStore.portfolio.portfolioFile) {
  //   formData.append("portfolio", ApplicationStore.portfolio.portfolioFile);
  // }
  // formData.append("content", JSON.stringify({ ...ApplicationStore }));
  // fetch("http://192.168.35.13:8000/recruits/2/applications", {
  //   method: "POST",
  //   headers: {
  //     Authorization:
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
  //   },
  //   body: formData,
  // }).then(res => {
  //   if (res.status === 200 || res.status === 201) {
  //     alert("제출완료!");
  //   } else if (res.status > 399) {
  //     alert("오류가 발생했음...");
  //   }
  // });
};

const Application = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <Form>
          <ApplicationHeader />
          <ApplicationBasicInfo />
          <ApplicationCareer />
          <ApplicationProject />
          <ApplicationIntroduction />
          <ApplicationPortfolio />
          <ApplicationEducation />
        </Form>
        <BtnBox>
          <SquareBtn
            isFilled
            onClick={handleSubmit}
            btnWidth={328}
            btnColor={theme.color.main}
            fontColor={theme.color.white}
            fontSize={14}
            fontWeight={700}
          >
            지원서 제출하기
          </SquareBtn>
        </BtnBox>
      </Inner>
    </Box>
  );
};

export default Application;
