import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import theme from "../../../styles/theme";
import applicationForm from "../../../assets/data/applicationForm";
import ApplicationInput from "../atoms/inputs/ApplicationInput";
import { ApplicationActions } from "../../../stores/ApplicationStore";
import { IPortfolioAttrs } from "../../../models/ApplicationInterfaces";
import RootStore from "../../../stores/RootStore";

const { ApplicationStore } = RootStore();

const Box = styled.section`
  position: relative;
  margin-top: 60px;
`;

const Required = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;

  i {
    color: ${theme.color.red};
  }
`;

const HeaderBox = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Asterisk = styled.i`
  margin-left: 5px;
  color: ${theme.color.red};
  font-weight: 700;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ApplicationPortfolio = observer((): JSX.Element => {
  return (
    <Box>
      <Required>
        <i>*</i>는 필수입력사항입니다.
      </Required>
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.portfolio.title}
        </Heading2>
        {applicationForm.portfolio.isRequired && <Asterisk>*</Asterisk>}
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.portfolio.desc}
      </Desc>
      <InputBox>
        {applicationForm.portfolio.item.map(item => {
          return (
            <ApplicationInput
              key={item.name}
              item={item}
              value={
                ApplicationStore.portfolio[
                  item.name as keyof IPortfolioAttrs
                ] || ""
              }
              onChange={e =>
                ApplicationActions.setInput(
                  "portfolio",
                  item.name as keyof IPortfolioAttrs,
                  e.target.value
                )
              }
            />
          );
        })}
      </InputBox>
    </Box>
  );
});

export default ApplicationPortfolio;
