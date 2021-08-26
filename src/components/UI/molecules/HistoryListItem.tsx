import React from "react";
import styled, { css, keyframes } from "styled-components";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";

import { HistoryProps } from "../../../models/landingInterfaces";
import RootStore from "../../../stores/RootStore";

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
  padding: 0 18%;
  z-index: 9;
  &:nth-child(1) {
    margin-top: 0px;
  }
  ${({ isEven }: StyleProps) =>
    !isEven &&
    css`
      margin-top: 180px;
    `}
  ${({ itemId, idx }: StyleProps) =>
    css`
      &:nth-child(${Number(idx) + 1}) {
        order: ${Number(itemId)};
      }
    `}
`;

const Texts = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 389px;
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
          fontColor={theme.color.descDark}
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
