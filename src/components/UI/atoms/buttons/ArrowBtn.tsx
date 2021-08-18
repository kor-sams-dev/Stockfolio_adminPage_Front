import React from "react";
import styled, { css } from "styled-components";

import { ArrowBtnProps } from "../../../../models/landingInterfaces";

const Box = styled.div`
  position: absolute;
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  opacity: 0.7;
  z-index: 999;
  cursor: pointer;
  ${({ direction }: ArrowBtnProps) =>
    (direction === "prev" &&
      css`
        left: -200px;
      `) ||
    (direction === "next" &&
      css`
        right: -200px;
      `)}
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  ${({ direction }: ArrowBtnProps) =>
    (direction === "prev" &&
      css`
        left: 50%;
        transform: translateX(-60%) translateY(-50%);
      `) ||
    (direction === "next" &&
      css`
        right: 50%;
        transform: translateX(60%) translateY(-50%);
      `)}
`;

function ArrowBtn({ direction, onClick }: ArrowBtnProps): JSX.Element {
  return (
    <Box onClick={onClick} direction={direction}>
      <Img
        src={`./images/${direction}Arrow.png`}
        alt={`${direction} button`}
        direction={direction}
      />
    </Box>
  );
}

export default ArrowBtn;
