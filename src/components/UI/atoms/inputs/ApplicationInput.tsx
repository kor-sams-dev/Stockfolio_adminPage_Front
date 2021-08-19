import React from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";

import RootStore from "../../../../stores/RootStore";

import theme from "../../../../styles/theme";
import {
  IApplicationForm,
  IBasicInfoAttrs,
  IItemProps,
} from "../../../../models/ApplicationInterfaces";

const { ApplicationStore, ApplicationActions } = RootStore();

interface StyleProps {
  itemWidth: number;
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: StyleProps) => `${itemWidth}%`};
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

interface IAddProps {
  item: IItemProps;
}

const ApplicationInput = observer(
  ({
    onChange,
    item,
  }: React.InputHTMLAttributes<HTMLInputElement> & IAddProps): JSX.Element => {
    return (
      <Box itemWidth={item.itemWidth}>
        <Title>{item.title}</Title>
        {item.type === "file" ? (
          <>
            <UploadedFile
              disabled
              value={
                ApplicationStore.portfolio.portfolioFile || item.placeholder
              }
            />
            <Label>
              <InputSection
                onChange={ApplicationActions.setPortfolioFile}
                type="file"
              />
            </Label>
          </>
        ) : (
          <InputSection type={item.type} onChange={onChange} />
        )}
      </Box>
    );
  }
);

export default ApplicationInput;
