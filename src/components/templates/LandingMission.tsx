import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import MissionContents from "../UI/molecules/MissionContents";

import theme from "../../styles/theme";

import RootStore from "../../stores/RootStore";

const { MissionStore } = RootStore();

interface EventProps {
  isActive: boolean;
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;

const Text = styled.em`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
`;

const HoverBox = styled.section`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  filter: ${({ isActive }: EventProps) => isActive && "blur(8px)"};
  transition: filter 0.3s ease-out;
`;

const NameText = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  bottom: 25px;
  font-size: 15px;
  color: white;
  opacity: ${({ isActive }: EventProps) => isActive && 0};
  transition: opacity 0.3s ease-out;
`;

const PlusBtn = styled.img`
  position: absolute;
  bottom: 20px;
  right: 16px;
  width: 42px;
  height: 42px;
  z-index: 1;
  cursor: pointer;
  opacity: ${({ isActive }: EventProps) => isActive && 0};
  transition: opacity 0.3s ease-out;
`;

const handleMouseOver = () => {
  MissionStore.setIsActive();
};

const Mission = observer(() => {
  return (
    <ViewportBox bgColor={theme.color.bgLight}>
      <Inner size="wide">
        <Heading2 fontWeight={700} fontSize={24}>
          우리의 Mission
        </Heading2>
        <Box>
          <Text>
            공정성을 추구하는
            <br />
            크리에이터에게
            <br />
            안전한 생태계를
            <br />
            제공합니다
          </Text>
          <HoverBox>
            <Img
              isActive={MissionStore.isActive}
              src="./images/whoAreWe.png"
              alt="오연우 대표"
            />
            <NameText isActive={MissionStore.isActive}>오연우 대표</NameText>
            <PlusBtn
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOver}
              isActive={MissionStore.isActive}
              src="./images/circlePlus.png"
              alt="더보기"
            />
            <MissionContents />
          </HoverBox>
        </Box>
      </Inner>
    </ViewportBox>
  );
});

export default Mission;
