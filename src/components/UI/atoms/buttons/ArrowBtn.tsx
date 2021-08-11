import React from "react";
import styled, { css } from "styled-components";

import { ArrowBtnProps } from "../../../../models/landingInterfaces";

import RootStore from "../../../../stores/RootStore";

const { SlideStore } = RootStore();

const Box = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  opacity: 0.7;
  cursor: pointer;
  ${({ direction }: ArrowBtnProps) =>
    (direction === "prev" &&
      css`
        left: 100px;
      `) ||
    (direction === "next" &&
      css`
        right: 100px;
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

const handleClickSlide = (direction: string) => {
  if (direction === "prev") {
    if (SlideStore.slideSpot === 0) return;
    SlideStore.setSlideSpot(SlideStore.movingUnit);
  }

  if (direction === "next") {
    if (SlideStore.slideSpot === SlideStore.movingUnit * -2) return;
    SlideStore.setSlideSpot(-SlideStore.movingUnit);
  }
};

function ArrowBtn({ direction }: ArrowBtnProps): JSX.Element {
  return (
    <Box onClick={() => handleClickSlide(direction)} direction={direction}>
      <Img
        src={`./images/${direction}Arrow.png`}
        alt={`${direction} button`}
        direction={direction}
      />
    </Box>
  );
}

export default ArrowBtn;
