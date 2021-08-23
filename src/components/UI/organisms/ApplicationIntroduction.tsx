import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Textarea from "../atoms/inputs/Textarea";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import theme from "../../../styles/theme";
import applicationForm from "../../../assets/data/applicationForm";
import { ApplicationActions } from "../../../stores/ApplicationStore";
import { IIntroductionAttrs } from "../../../models/ApplicationInterfaces";
import RootStore from "../../../stores/RootStore";

const { ApplicationStore } = RootStore();

const Box = styled.section`
  position: relative;
  margin-top: 60px;
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

const ApplicationIntroduction = observer((): JSX.Element => {
  return (
    <Box>
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.introduction.title}
        </Heading2>
        {applicationForm.introduction.isRequired && <Asterisk>*</Asterisk>}
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.introduction.desc}
      </Desc>
      <InputBox>
        {applicationForm.introduction.item.map(item => {
          return (
            <Textarea
              key={item.name}
              item={item}
              value={ApplicationStore.introduction.aboutMe}
              onChange={e =>
                ApplicationActions.setInput(
                  "introduction",
                  item.name as keyof IIntroductionAttrs,
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

export default ApplicationIntroduction;
