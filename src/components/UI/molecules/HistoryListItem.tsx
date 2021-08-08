import React from "react";
import styled, { css } from "styled-components";

import Desc from "../atoms/texts/Desc";

interface Props {
  title: string;
  date: string;
  desc: string;
  itemId: string;
  isEven: boolean;
  idx: number;
}

interface StyleProps {
  itemId?: string;
  isEven?: boolean;
  idx?: number;
}

const Item = styled.li`
  position: relative;
  ${({ theme }) => theme.flexMixin("normal", "normal")};
  flex-direction: column;
  &:nth-child(1) {
    margin-top: -5px;
  }
  &:nth-child(2) {
    margin-top: 76px;
  }

  ${({ isEven }: StyleProps) =>
    (isEven &&
      css`
        margin-top: -18px;
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
`;

const Texts = styled.section`
  ${({ theme }) => theme.flexMixin("normal", "normal")};
  flex-direction: column;
  width: 389px;
  color: ${({ theme }) => theme.colorDesc};
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
  color: ${({ theme }) => theme.colorMain};
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
}: Props): JSX.Element {
  return (
    <Item isEven={isEven} itemId={itemId} idx={idx}>
      <Texts>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Desc fontSize="14" fontColor="inherit" fontWeight="400">
          {desc}
        </Desc>
      </Texts>
      <Circle isEven={isEven} />
    </Item>
  );
}

export default HistoryListItem;
