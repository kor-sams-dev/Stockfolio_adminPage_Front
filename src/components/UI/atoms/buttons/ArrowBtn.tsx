import React from "react";
import styled, { css } from "styled-components";

import { ArrowBtnProps } from "../../../../models/landingInterfaces";

const Box = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.colorDesc};
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
  ${({ direction }: ArrowBtnProps) =>
    (direction === "prev" &&
      css`
        left: 15px;
      `) ||
    (direction === "next" &&
      css`
        right: 0;
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

function ArrowBtn({ direction }: ArrowBtnProps): JSX.Element {
  return (
    <Box direction={direction}>
      <Img
        src={`./images/${direction}Arrow.png`}
        alt={`${direction} button`}
        direction={direction}
      />
    </Box>
  );
}

export default ArrowBtn;
