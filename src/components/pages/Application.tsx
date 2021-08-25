import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import styled from "styled-components";

import applicationForm from "../../assets/data/applicationForm";
import {
  applicationDefaultForm,
  applicationListDefaultForm,
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
import SquareBtn from "../UI/atoms/buttons/SquareBtn";
import ApplicationHeader from "../UI/molecules/ApplicationHeader";
import ApplicationBasicInfo from "../UI/organisms/ApplicationBasicInfo";
import ApplicationCareer from "../UI/organisms/ApplicationCareer";
import ApplicationEducation from "../UI/organisms/ApplicationEducation";
import ApplicationIntroduction from "../UI/organisms/ApplicationIntroduction";
import ApplicationPortfolio from "../UI/organisms/ApplicationPortfolio";
import ApplicationProject from "../UI/organisms/ApplicationProject";
import ApplyLabel from "../UI/atoms/Labels/ApplyLabel";

import theme from "../../styles/theme";
import { stringToQbj } from "../../utils/query";
import { ApplicationListStore } from "../../stores/ApplicationStore";
import handleAppendForm from "../../utils/handleAppendForm";

const { ApplicationStore, ApplicationActions, CheckboxStore, ApplyLabelStore } =
  RootStore();

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

const handleCheckRequired = (): boolean => {
  const requiredInput = ["basicInfo"];

  const convertedStore = toJS(ApplicationStore);
  const convertedListStore = toJS(ApplicationListStore);

  let careerValueState = false;
  let projectValueState = false;
  let portfolioValueState = false;

  const inputValues = Object.entries(convertedStore)
    .filter(el => requiredInput.includes(el[0]))
    .flatMap(el => el[1])
    .flatMap(value => Object.values(value));

  if (CheckboxStore.isChecked.career) {
    careerValueState = true;
  } else {
    careerValueState = convertedListStore.career
      .flatMap(el => Object.values(el))
      .every(value => value !== "");
  }

  if (CheckboxStore.isChecked.project) {
    projectValueState = true;
  } else {
    projectValueState = convertedListStore.project
      .flatMap(el => Object.values(el))
      .every(value => value !== "");
  }

  if (
    ApplicationStore.portfolio.portfolioUrl ||
    ApplicationStore.file.portfolio
  ) {
    portfolioValueState = true;
  }

  return (
    inputValues.every(value => value !== "") &&
    careerValueState &&
    projectValueState &&
    portfolioValueState
  );
};

interface IParams {
  id: string;
}

const Application = observer(() => {
  let isSuccess = false;
  const history = useHistory();
  const params: IParams = useParams();

  const goToMain = () => {
    history.push("/");
  };

  const handleSubmit = () => {
    const isAllRequiredFilled = handleCheckRequired();

    if (!isAllRequiredFilled) {
      alert("필수 사항을 모두 입력해주세요");
    } else {
      alert("통과");
    }

    const formData = handleAppendForm();

    // const formData = new FormData();
    // if (ApplicationStore.file.portfolio) {
    //   formData.append("portfolio", ApplicationStore.file.portfolio);
    // }
    // formData.append(
    //   "content",
    //   JSON.stringify({ ...ApplicationStore, ...ApplicationListStore })
    // );

    fetch(`http://192.168.35.13:8000/recruits/${params.id}/applications`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
      },
      body: formData,
    }).then(res => {
      if (res.status === 200 || res.status === 201) {
        isSuccess = true;
        ApplyLabelStore.setIsApplyLabelOn();
        setTimeout(ApplyLabelStore.setIsApplyLabelOn, 1500);
        setTimeout(goToMain, 1600);
      } else if (res.status > 399) {
        isSuccess = false;
        setTimeout(ApplyLabelStore.setIsApplyLabelOn, 1500);
      }
    });
  };

  // useEffect(() => {
  //   // const queryObj = stringToQbj(location.pathname);
  //   // const applyState = queryObj.apply;

  //   // const inputKeys = Object.keys(applicationDefaultForm);
  //   // const listInputKeys = Object.keys(applicationListDefaultForm);

  //   // if (applyState === "register") return;
  //   // if (applyState === "modify") {}
  //   fetch(`http://192.168.35.13:8000/recruits/${params.id}/applications`, {
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4",
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       const { content } = res.result;

  //       // Object.keys(content).forEach(sort => {
  //       //   Object.keys(content[sort]).forEach((name, idx) => {
  //       //     if (inputKeys.includes(sort)) {
  //       //       ApplicationActions.setInput(
  //       //         sort as keyof IApplicationForm,
  //       //         name,
  //       //         content[sort][name]
  //       //       );
  //       //     } else if (listInputKeys.includes(sort)) {
  //       //       console.log("a");
  //       //     }
  //       //   });
  //       // });

  //       Object.keys(content).forEach(sort => {
  //         Object.keys(content[sort]).forEach(name => {
  //           switch (sort) {
  //             case "career":
  //               content.career.forEach((_: unknown, idx: number) => {
  //                 ApplicationActions.setCareerListInput(
  //                   idx,
  //                   name as keyof ICareerAttrs,
  //                   content[sort][name]
  //                 );
  //               });
  //               break;
  //             case "project":
  //               content.project.forEach((_: unknown, idx: number) => {
  //                 ApplicationActions.setProjectListInput(
  //                   idx,
  //                   name as keyof IProjectAttrs,
  //                   content[sort][name]
  //                 );
  //               });
  //               break;
  //             case "introduction":
  //               ApplicationActions.setInput(
  //                 "introduction",
  //                 name as keyof IIntroductionAttrs,
  //                 content[sort][name]
  //               );
  //               break;
  //             case "portfolio":
  //               ApplicationActions.setInput(
  //                 "portfolio",
  //                 name as keyof IPortfolioAttrs,
  //                 content[sort][name]
  //               );
  //               break;
  //             case "education":
  //               ApplicationActions.setInput(
  //                 "education",
  //                 name as keyof IEducationAttrs,
  //                 content[sort][name]
  //               );
  //               break;
  //             default:
  //               ApplicationActions.setInput(
  //                 "basicInfo",
  //                 name as keyof IBasicInfoAttrs,
  //                 content[sort][name]
  //               );
  //           }
  //         });
  //       });
  //     });
  // }, []);

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
      {ApplyLabelStore.isApplyLabelOn && <ApplyLabel isSuccess={isSuccess} />}
    </>
  );
});

export default Application;
