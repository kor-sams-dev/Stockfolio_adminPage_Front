import React from "react";
import styled from "styled-components";

import AddListBtn from "../atoms/buttons/AddListBtn";
import CheckBox from "../atoms/inputs/CheckBox";
import Input from "../atoms/inputs/Input";
import StyledSelect from "../atoms/inputs/StyledSelect";
import Textarea from "../atoms/inputs/Textarea";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

import {
  FormCategoryProps,
  ApplicationProps,
} from "../../../models/ApplicationInterfaces";
import theme from "../../../styles/theme";
import ApplicationFormStore from "../../../stores/ApplicationFormStore";

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

const ApplicationItem = ({ category }: FormCategoryProps): JSX.Element => {
  return (
    <Box>
      {(category.data.hasCheckBox && (
        <CheckBox title={category.data.title} name={category.sort} />
      )) ||
        (category.data.isRequired && (
          <Required>
            <i>*</i>는 필수입력사항입니다.
          </Required>
        ))}
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
        {/* {ApplicationFormStore[category.sort].map(item => {
          return (
            (item.type === "select" && (
              <StyledSelect
                sort={category.sort}
                name={item.name}
                placeholder={item.placeholder}
                title={item.title}
                options={item.options}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )) ||
            (item.type === "textarea" && (
              <Textarea
                sort={category.sort}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                title={item.title}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )) || (
              <Input
                sort={category.sort}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                title={item.title}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )
          );
        })} */}
        {category.data.item.map(item => {
          return (
            (item.type === "select" && (
              <StyledSelect
                sort={category.sort}
                name={item.name}
                placeholder={item.placeholder}
                title={item.title}
                options={item.options}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )) ||
            (item.type === "textarea" && (
              <Textarea
                sort={category.sort}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                title={item.title}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )) || (
              <Input
                sort={category.sort}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                title={item.title}
                itemWidth={item.itemWidth}
                key={item.name}
              />
            )
          );
        })}
      </InputBox>
      {category.data.isListed && (
        <AddListBtn sort={category.sort}>{category.data.title}</AddListBtn>
      )}
    </Box>
  );
};

export default ApplicationItem;
