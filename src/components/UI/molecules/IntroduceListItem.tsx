import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";

import { IntroduceProps } from "../../../models/landingInterfaces";
import RootStore from "../../../stores/RootStore";

interface EventProps {
  isActive: boolean;
}

const Item = styled.li`
  position: relative;
  width: 25%;
`;

const CircleArrow = styled.img`
  position: absolute;
  top: -3px;
  left: 0;
  opacity: ${({ isActive }: EventProps) => (isActive ? 1 : 0)};
  transition: opacity 0.4s ease-out;
`;

const Title = styled.em`
  display: inline-block;
  margin-left: ${({ isActive }: EventProps) => (isActive ? "30px" : 0)};
  margin-bottom: 38px;
  color: ${({ isActive }) =>
    isActive ? theme.color.black : theme.color.lightGrey};
  font-weight: 700;
  font-size: 18px;
  transition: margin-left 0.7s ease-out;
`;

const IntroduceListItem = observer(({ title, desc, idx }: IntroduceProps) => {
  const { SlideStore } = RootStore();
  const isActive = SlideStore.slideSpot === idx;

  return (
    <Item>
      <CircleArrow
        isActive={isActive}
        src="./images/circleArrow.png"
        alt="선택된 항목"
      />
      <Title isActive={isActive}>{title}</Title>
      <Desc
        fontColor={isActive ? theme.color.descLight : theme.color.lightGrey}
        fontSize={16}
        fontWeight={400}
        lineHeight={1.7}
      >
        {desc}
      </Desc>
    </Item>
  );
});

export default IntroduceListItem;
