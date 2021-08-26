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

const { ApplicationActions, StyledAlertStore, HandleToken } = RootStore();

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 200px;
  padding-top: 30px;
`;

const Content = styled.section`
  padding-bottom: 120px;
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
  const location = useLocation();

  async function postData(methodType: string) {
    const formData = handleAppendForm();
    const [status, response] = await fetchData(
      `${Recruits}/${params.id}/applications`,
      {
        method: methodType,
        headers: {
          Authorization: HandleToken.getUserToken(),
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
      return;
    }

    const queryObj = stringToQbj(location.pathname);
    if (queryObj.apply === "register") {
      postData("POST");
    } else if (queryObj.apply === "modify") {
      postData("PATCH");
    }
  };

  async function getData() {
    const listInputKeys = Object.keys(applicationListDefaultForm);
    const [status, response] = await fetchData(
      `${Recruits}/${params.id}/applications`,
      {
        headers: {
          Authorization: HandleToken.getUserToken(),
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
    const queryObj = stringToQbj(location.pathname);

    if (queryObj.apply === "register") return;
    if (queryObj.apply === "modify") {
      getData();
    }
  }, []);

  return (
    <>
      <Box>
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
      </Box>
      {StyledAlertStore.isAlertOn && <StyledAlert />}
    </>
  );
});

export default Application;
