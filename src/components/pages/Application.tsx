import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "styled-components";

import {
  applicationListDefaultForm,
  IBasicInfoAttrs,
  ICareerAttrs,
  IEducationAttrs,
  IIntroductionAttrs,
  IPortfolioAttrs,
  IProjectAttrs,
} from "../../models/ApplicationInterfaces";
import RootStore from "../../stores/RootStore";

import Inner from "../../styles/Inner";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";
import ApplicationHeader from "../UI/molecules/ApplicationHeader";
import ApplicationBasicInfo from "../UI/organisms/ApplicationBasicInfo";
import ApplicationCareer from "../UI/organisms/ApplicationCareer";
import ApplicationEducation from "../UI/organisms/ApplicationEducation";
import ApplicationIntroduction from "../UI/organisms/ApplicationIntroduction";
import ApplicationPortfolio from "../UI/organisms/ApplicationPortfolio";
import ApplicationProject from "../UI/organisms/ApplicationProject";
import StyledAlert from "../UI/molecules/StyledAlert";

import theme from "../../styles/theme";
import { Recruits } from "../../config";

import handleCheckRequired from "../../utils/handleCheckRequired";
import handleAppendForm from "../../utils/handleAppendForm";
import { stringToQbj } from "../../utils/query";
import fetchData from "../../utils/fetch";

const { ApplicationActions, StyledAlertStore } = RootStore();

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding: 176px 74px 0;
`;

const Content = styled.section`
  padding: 0 42px 120px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IParams {
  id: string;
}

const Application = observer(() => {
  const params: IParams = useParams();

  async function postData() {
    const formData = handleAppendForm();
    const [status, response] = await fetchData(
      `${Recruits}/${params.id}/applications`,
      {
        method: "POST",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
        },
        body: formData,
      }
    );

    if (status === 200 || status === 201) {
      StyledAlertStore.setAlertType("applySuccess");
      StyledAlertStore.setIsAlertOn();
    } else if (status > 399) {
      StyledAlertStore.setAlertType("applyReject");
      StyledAlertStore.setIsAlertOn();
    }
  }

  const handleSubmit = () => {
    const isAllRequiredFilled = handleCheckRequired();

    if (!isAllRequiredFilled) {
      StyledAlertStore.setAlertType("requiredNotFilled");
      StyledAlertStore.setIsAlertOn();
    }

    postData();
  };

  async function getData() {
    const listInputKeys = Object.keys(applicationListDefaultForm);
    const [status, response] = await fetchData(
      `${Recruits}/${params.id}/applications`,
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
        },
      }
    );

    const { content } = response.result;

    Object.keys(content).forEach(sort => {
      if (listInputKeys.includes(sort)) {
        Object.keys(content[sort]).forEach(chunkIdx => {
          Object.keys(content[sort][chunkIdx]).forEach(name => {
            switch (sort) {
              case "career":
                ApplicationActions.setCareerListInput(
                  Number(chunkIdx),
                  name as keyof ICareerAttrs,
                  content[sort][chunkIdx][name]
                );
                break;
              case "project":
                ApplicationActions.setProjectListInput(
                  Number(chunkIdx),
                  name as keyof IProjectAttrs,
                  content[sort][chunkIdx][name]
                );
                break;
              default:
                break;
            }
          });
        });
      } else {
        Object.keys(content[sort]).forEach(name => {
          switch (sort) {
            case "basicInfo":
              ApplicationActions.setInput(
                "basicInfo",
                name as keyof IBasicInfoAttrs,
                content.basicInfo[name]
              );
              break;
            case "introduction":
              ApplicationActions.setInput(
                "introduction",
                name as keyof IIntroductionAttrs,
                content.introduction[name]
              );
              break;
            case "portfolio":
              ApplicationActions.setInput(
                "portfolio",
                name as keyof IPortfolioAttrs,
                content.portfolio[name]
              );
              break;
            case "education":
              ApplicationActions.setInput(
                "education",
                name as keyof IEducationAttrs,
                content.education[name]
              );
              break;
            default:
              break;
          }
        });
      }
    });
  }

  useEffect(() => {
    const location = useLocation();
    const queryObj = stringToQbj(location.pathname);

    if (queryObj.apply === "register") return;
    if (queryObj.apply === "modify") {
      getData();
    }
  }, []);

  return (
    <>
      <Box>
        {/* <Inner size="wide"> */}
        <Content>
          <ApplicationHeader />
          <ApplicationBasicInfo />
          <ApplicationCareer />
          <ApplicationProject />
          <ApplicationIntroduction />
          <ApplicationPortfolio />
          <ApplicationEducation />
        </Content>
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
        {/* </Inner> */}
      </Box>
      {StyledAlertStore.isAlertOn && <StyledAlert />}
    </>
  );
});

export default Application;
