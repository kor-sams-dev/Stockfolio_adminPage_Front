import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import applicationForm from "../../assets/data/applicationForm";
import {
  IApplicationForm,
  IBasicInfoAttrs,
  ICareerAttrs,
  IEducationAttrs,
  IIntroductionAttrs,
  IPortfolioAttrs,
  IProjectAttrs,
} from "../../models/ApplicationInterfaces";
import RootStore from "../../stores/RootStore";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import { stringToQbj } from "../../utils/query";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";

import ApplicationHeader from "../UI/molecules/ApplicationHeader";
import ApplicationBasicInfo from "../UI/organisms/ApplicationBasicInfo";
import ApplicationCareer from "../UI/organisms/ApplicationCareer";
import ApplicationEducation from "../UI/organisms/ApplicationEducation";
import ApplicationIntroduction from "../UI/organisms/ApplicationIntroduction";
import ApplicationPortfolio from "../UI/organisms/ApplicationPortfolio";
import ApplicationProject from "../UI/organisms/ApplicationProject";

const { ApplicationStore, ApplicationActions } = RootStore();

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
    return Object.values(requiredEl).filter(item => item === "").length === 0;
  });
};

const handleSubmit = () => {
  // const isAllRequiredFilled = handleCheckRequired();

  const formData = new FormData();
  if (ApplicationStore.file.portfolio) {
    formData.append("portfolio", ApplicationStore.file.portfolio);
  }
  formData.append("content", JSON.stringify({ ...ApplicationStore }));

  fetch(`http://192.168.35.119:8000/recruits/2/applications`, {
    method: "POST",
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
    },
    body: formData,
  }).then(res => {
    if (res.status === 200 || res.status === 201) {
      alert("제출완료!");
    } else if (res.status > 399) {
      alert("오류가 발생했음...");
    }
  });
};

const Application = observer(() => {
  // const location = useLocation();

  // useEffect(() => {
  //   const queryObj = stringToQbj(location.pathname);
  //   const applyState = queryObj.apply;

  //   if (applyState === "register") return;
  //   if (applyState === "modify") {
  //     fetch(`http://192.168.35.119:8000/recruits/1/applications`, {
  //       headers: {
  //         Authorization:
  //           "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    fetch(`https://api-we.stockfolio.ai/recruits/2/applications`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
      },
    })
      .then(res => res.json())
      .then(res => {
        const content = JSON.parse(res.result.content);
        console.log(res);
        // const portfolioFile = JSON.parse(res.result.portfolioFile);
        // console.log(portfolioFile);
        // console.log(content);
        // Object.keys(content).forEach(sort => {
        //   Object.keys(content[sort]).forEach(name =>
        //     ApplicationActions.setInput(
        //       sort as keyof IApplicationForm,
        //       name as keyof IApplicationForm[typeof sort],
        //       content[sort][name]
        //     )
        //   );
        // });
        Object.keys(content).forEach(sort => {
          Object.keys(content[sort]).forEach(name => {
            ApplicationActions.setInput(
              "basicInfo",
              name as keyof IBasicInfoAttrs,
              content[sort][name]
            );
            ApplicationActions.setInput(
              "career",
              name as keyof ICareerAttrs,
              content[sort][name]
            );
            ApplicationActions.setInput(
              "project",
              name as keyof IProjectAttrs,
              content[sort][name]
            );
            ApplicationActions.setInput(
              "introduction",
              name as keyof IIntroductionAttrs,
              content[sort][name]
            );
            ApplicationActions.setInput(
              "portfolio",
              name as keyof IPortfolioAttrs,
              content[sort][name]
            );
            ApplicationActions.setInput(
              "education",
              name as keyof IEducationAttrs,
              content[sort][name]
            );
          });
        });
      });
  }, []);

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
});

export default Application;
