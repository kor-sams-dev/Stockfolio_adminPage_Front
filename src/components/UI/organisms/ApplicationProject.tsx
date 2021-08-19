import React from "react";
import styled from "styled-components";

import AddListBtn from "../atoms/buttons/AddListBtn";
import CheckBox from "../atoms/inputs/CheckBox";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import theme from "../../../styles/theme";
import applicationForm from "../../../assets/data/applicationForm";
import ApplicationInput from "../atoms/inputs/ApplicationInput";
import { ApplicationActions } from "../../../stores/ApplicationStore";
import { IProjectAttrs } from "../../../models/ApplicationInterfaces";

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

const ApplicationProject = (): JSX.Element => {
  return (
    <Box>
      <CheckBox title={applicationForm.project.title} />
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.project.title}
        </Heading2>
        {applicationForm.project.isRequired && <Asterisk>*</Asterisk>}
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.project.desc}
      </Desc>
      <InputBox>
        {applicationForm.project.item.map(item => {
          return (
            <ApplicationInput
              key={item.name}
              item={item}
              onChange={e =>
                ApplicationActions.setInput(
                  "project",
                  item.name as keyof IProjectAttrs,
                  e.target.value
                )
              }
            />
          );
        })}
      </InputBox>
      <AddListBtn>{applicationForm.project.title}</AddListBtn>
    </Box>
  );
};

export default ApplicationProject;
