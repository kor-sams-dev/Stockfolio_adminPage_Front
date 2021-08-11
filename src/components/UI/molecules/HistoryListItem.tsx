import React from "react";
import styled, { css, keyframes } from "styled-components";

import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

import { HistoryProps } from "../../../models/landingInterfaces";
import RootStore from "../../../stores/RootStore";

import handleThemeKey from "../../../utils/handleThemeKey";

const { ScrollStore } = RootStore();

interface StyleProps {
  itemId?: string;
  isEven?: boolean;
  idx?: number;
}

const fadeIn = keyframes`
  to {
    opacity: 1
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
  &:nth-child(1) {
    margin-top: -5px;
  }
  &:nth-child(2) {
    margin-top: 76px;
  }
  ${({ isEven }: StyleProps) =>
    (isEven &&
      css`
        margin-top: -17px;
        padding-left: 60px;
      `) ||
    (!isEven &&
      css`
        margin-top: 80px;
        padding-left: 140px;
      `)}
  ${({ itemId, idx }: StyleProps) =>
    css`
      &:nth-child(${Number(idx) + 1}) {
        order: ${Number(itemId)};
      }
    `}
  ${({ idx }: StyleProps) =>
    ScrollStore.viewingSectionIdx === -4 &&
    css`
      animation: ${fadeIn} 0.4s ${`${Number(idx) * 2}s`} 1 ease-in forwards;
    `}
`;

const Texts = styled.section`
  display: flex;
  flex-direction: column;
  width: 389px;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  width: 19px;
  height: 19px;
  border: 2px solid #7f6fc1;
  border-radius: 50%;
  background: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  ${({ isEven }: StyleProps) =>
    (isEven &&
      css`
        left: 0;
        transform: translateX(-50%);
      `) ||
    (!isEven &&
      css`
        right: 0;
        transform: translateX(50%);
      `)}
`;

const Date = styled.span`
  color: ${theme.color.main};
  font-weight: 500;
  font-size: 15px;
`;

const Title = styled.em`
  margin: 16px 0;
  font-weight: 700;
  font-size: 18px;
`;

function HistoryListItem({
  isEven,
  title,
  date,
  desc,
  itemId,
  idx,
}: HistoryProps): JSX.Element {
  return (
    <Item isEven={isEven} itemId={itemId} idx={idx}>
      <Texts>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Desc
          fontColor={handleThemeKey("desc")}
          fontSize={14}
          fontWeight={400}
          lineHeight={1.7}
        >
          {desc}
        </Desc>
      </Texts>
      <Circle isEven={isEven} />
    </Item>
  );
}

export default HistoryListItem;
