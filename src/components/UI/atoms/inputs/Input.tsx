import React from "react";
import styled, { css } from "styled-components";
import {
  DataItemProps,
  InputWidthProps,
} from "../../../../models/ApplicationInterfaces";

import theme from "../../../../styles/theme";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: InputWidthProps) => `${itemWidth}%`};
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: ${theme.color.descMedium};
  font-weight: 700;
`;

const InputSection = styled.input`
  position: relative;
  margin-top: 6px;
  padding: 16px;
  height: 54px;
  background: ${theme.color.lilacLight};
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};
  ${({ type }) =>
    (type === "file" &&
      css`
        display: none;
      `) ||
    (type === "date" &&
      css`
        &::before {
          content: "";
          position: absolute;
          color: ${theme.color.grey1};
          letter-spacing: 0.7px;
          pointer-events: all;
        }
        &::-webkit-calendar-picker-indicator {
          opacity: 0.2;
        }
        &::-webkit-datetime-edit-year-field,
        &::-webkit-datetime-edit-month-field,
        &::-webkit-datetime-edit-day-field,
        &::-webkit-datetime-edit-text {
          color: ${theme.color.grey1};
        }
      `)}

  &::placeholder {
    color: ${theme.color.grey1};
  }
`;

const Label = styled.label`
  position: relative;
  margin-top: 6px;
  padding: 19px 16px 15px;
  height: 54px;
  background: ${theme.color.lilacLight};
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.grey1};
  pointer-events: none;

  &::after {
    content: "업로드";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    padding: 8px 12px;
    border-radius: 8px;
    background: ${theme.color.blue};
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.white};
    pointer-events: all;
    cursor: pointer;
  }
`;

const Input = ({
  name,
  type,
  placeholder,
  title,
  itemWidth,
}: DataItemProps): JSX.Element => {
  return (
    <Box itemWidth={itemWidth}>
      <Title>{title}</Title>
      {type === "file" ? (
        <Label>
          {placeholder}
          <InputSection type={type} placeholder={placeholder} name={name} />
        </Label>
      ) : (
        <InputSection type={type} placeholder={placeholder} name={name} />
      )}
    </Box>
  );
};

export default Input;
