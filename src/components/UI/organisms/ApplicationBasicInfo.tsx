import React from "react";
import styled from "styled-components";

import Input from "../atoms/inputs/Input";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import {
  FormCategoryProps,
  IFormCategory,
} from "../../../models/ApplicationInterfaces";
import theme from "../../../styles/theme";
import RootStore from "../../../stores/RootStore";

const { BasicInfoStore } = RootStore();

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

const ApplicationBasicInfo = ({ category }: FormCategoryProps): JSX.Element => {
  return (
    <Box>
      <Required>
        <i>*</i>는 필수입력사항입니다.
      </Required>
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {category.data.title}
        </Heading2>
        <Asterisk>*</Asterisk>
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {category.data.desc}
      </Desc>
      <InputBox>
        {category.data.item.map(item => {
          return (
            <Input
              sort={category.sort}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              title={item.title}
              itemWidth={item.itemWidth}
              key={item.name}
            />
          );
        })}
      </InputBox>
    </Box>
  );
};

export default ApplicationBasicInfo;
