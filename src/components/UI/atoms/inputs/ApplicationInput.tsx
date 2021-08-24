import React, { useState } from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";

import RootStore from "../../../../stores/RootStore";

import theme from "../../../../styles/theme";
import { IItemProps } from "../../../../models/ApplicationInterfaces";

const { ApplicationStore, ApplicationActions } = RootStore();

interface StyleProps {
  itemWidth?: number;
  isAlertOn?: boolean;
}

const Box = styled.div`
  position: relative;
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
  background: ${theme.color.greyLight1};
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};
  ${({ type }) =>
    type === "file" &&
    css`
      display: none;
    `}
  &::placeholder {
    color: ${theme.color.grey1};
  }

  &.notFilled {
    border: 1px solid ${theme.color.red};
  }
`;

const Alert = styled.span`
  position: absolute;
  bottom: -20px;
  left: 5px;
  font-size: 12px;
  color: ${theme.color.blue};
  opacity: ${({ isAlertOn }: StyleProps) => (isAlertOn ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;

const Label = styled.label`
  position: relative;
  margin-top: 6px;
  padding: 19px 16px 15px;
  height: 54px;
  background: ${theme.color.greyLight1};
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
  width: calc(100% - 95px);
  background: transparent;
  font-size: 14px;
  z-index: 9;
  overflow: hidden;
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
    value,
  }: React.InputHTMLAttributes<HTMLInputElement> & IAddProps): JSX.Element => {
    const [isAlertOn, setIsAlertOn] = useState(false);

    return (
      <Box itemWidth={item.itemWidth}>
        <Title>{item.title}</Title>
        {(item.type === "file" && (
          <>
            <UploadedFile
              disabled
              value={ApplicationStore.file.portfolio?.name || item.placeholder}
            />
            <Label>
              <InputSection
                onChange={ApplicationActions.setPortfolioFile}
                type="file"
              />
            </Label>
          </>
        )) ||
          (item.type === "date" && (
            <>
              <InputSection
                placeholder={item.placeholder}
                type="text"
                value={value}
                onChange={onChange}
                onFocus={() => {
                  setIsAlertOn(true);
                }}
                onBlur={() => {
                  setIsAlertOn(false);
                }}
              />
              <Alert isAlertOn={isAlertOn}>
                연도/월/일 형식으로 입력해주세요
              </Alert>
            </>
          )) || (
            <InputSection
              placeholder={item.placeholder}
              type={item.type}
              onChange={onChange}
              value={value}
            />
          )}
      </Box>
    );
  }
);

export default ApplicationInput;
