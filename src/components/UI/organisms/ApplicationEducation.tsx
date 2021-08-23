import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import StyledSelect from "../atoms/inputs/StyledSelect";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import theme from "../../../styles/theme";
import applicationForm from "../../../assets/data/applicationForm";
import ApplicationInput from "../atoms/inputs/ApplicationInput";
import { ApplicationActions } from "../../../stores/ApplicationStore";
import { IEducationAttrs } from "../../../models/ApplicationInterfaces";
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

const ApplicationEducation = observer((): JSX.Element => {
  return (
    <Box>
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.education.title}
        </Heading2>
        {applicationForm.education.isRequired && <Asterisk>*</Asterisk>}
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.education.desc}
      </Desc>
      <InputBox>
        {applicationForm.education.item.map(item => {
          return (
            (item.type === "select" && (
              <StyledSelect key={item.name} item={item} />
            )) || (
              <ApplicationInput
                key={item.name}
                item={item}
                value={
                  ApplicationStore.education[item.name as keyof IEducationAttrs]
                }
                onChange={e =>
                  ApplicationActions.setInput(
                    "education",
                    item.name as keyof IEducationAttrs,
                    e.target.value
                  )
                }
              />
            )
          );
        })}
      </InputBox>
    </Box>
  );
});

export default ApplicationEducation;
