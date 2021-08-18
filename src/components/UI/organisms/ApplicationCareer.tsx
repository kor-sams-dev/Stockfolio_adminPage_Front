import React from "react";
import styled from "styled-components";

import AddListBtn from "../atoms/buttons/AddListBtn";
import CheckBox from "../atoms/inputs/CheckBox";
import Input from "../atoms/inputs/Input";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import { FormCategoryProps } from "../../../models/ApplicationInterfaces";
import theme from "../../../styles/theme";

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

const ApplicationCareer = ({ category }: FormCategoryProps): JSX.Element => {
  return (
    <Box>
      <CheckBox title={category.data.title} name={category.sort} />
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {category.data.title}
        </Heading2>
        {category.data.isRequired && <Asterisk>*</Asterisk>}
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
      <AddListBtn sort={category.sort}>{category.data.title}</AddListBtn>
    </Box>
  );
};

export default ApplicationCareer;
