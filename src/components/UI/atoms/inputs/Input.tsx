import React from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";

import {
  DataItemProps,
  InputWidthProps,
} from "../../../../models/ApplicationInterfaces";

import RootStore from "../../../../stores/RootStore";

import theme from "../../../../styles/theme";

const { ApplicationStore } = RootStore();

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

const UploadedFile = styled.input`
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 14px;
  z-index: 9;
  color: ${({ value }) =>
    value === "첨부파일을 업로드해주세요."
      ? theme.color.grey1
      : theme.color.black};
`;

const Input = observer(
  ({
    name,
    sort,
    type,
    placeholder,
    title,
    itemWidth,
  }: DataItemProps): JSX.Element => {
    return (
      <Box itemWidth={itemWidth}>
        <Title>{title}</Title>
        {type === "file" ? (
          <>
            <UploadedFile
              disabled
              value={ApplicationStore.portfolio.portfolioFile || placeholder}
            />
            <Label>
              <InputSection
                onChange={ApplicationStore.setPortfolioFile}
                type={type}
                placeholder={placeholder}
                name={name}
              />
            </Label>
          </>
        ) : (
          <InputSection
            onChange={e => ApplicationStore.setInput(e)}
            type={type}
            placeholder={placeholder}
            name={name}
          />
        )}
      </Box>
    );
  }
);

export default Input;
