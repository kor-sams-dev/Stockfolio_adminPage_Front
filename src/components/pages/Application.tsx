import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
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

import theme from "../../styles/theme";
import { stringToQbj } from "../../utils/query";
import handleAppendForm from "../../utils/handleAppendForm";
import StyledAlert from "../UI/molecules/StyledAlert";
import handleCheckRequired from "../../utils/handleCheckRequired";

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

  const handleSubmit = () => {
    const isAllRequiredFilled = handleCheckRequired();

    if (!isAllRequiredFilled) {
      StyledAlertStore.setAlertType("requiredNotFilled");
      StyledAlertStore.setIsAlertOn();
      return;
    }

    const formData = handleAppendForm();

    fetch(`http://192.168.35.119:8000/recruits/${params.id}/applications`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
      },
      body: formData,
    }).then(res => {
      if (res.status === 200 || res.status === 201) {
        StyledAlertStore.setAlertType("applySuccess");
        StyledAlertStore.setIsAlertOn();
      } else if (res.status > 399) {
        StyledAlertStore.setAlertType("applyReject");
        StyledAlertStore.setIsAlertOn();
      }
    });
  };

  useEffect(() => {
    // const queryObj = stringToQbj(location.pathname);
    // const applyState = queryObj.apply;

    const listInputKeys = Object.keys(applicationListDefaultForm);

    // if (applyState === "register") return;
    // if (applyState === "modify") {}
    fetch(`http://192.168.35.119:8000/recruits/${params.id}/applications`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
      },
    })
      .then(res => res.json())
      .then(res => {
        const { content } = res.result;

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
      });
  }, []);

  return (
    <>
      <Box>
        <Inner size="wide">
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
        </Inner>
      </Box>
      {StyledAlertStore.isAlertOn && <StyledAlert />}
    </>
  );
});

export default Application;
