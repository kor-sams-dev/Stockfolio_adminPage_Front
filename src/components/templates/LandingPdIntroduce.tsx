import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import MacbookSlide from "../UI/organisms/MacbookSlide";
import IntroduceList from "../UI/organisms/IntroduceList";

const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: ${({ theme }) => theme.colorBgLightGrey};
  z-index: -1;
`;

function PdIntroduce(): JSX.Element {
  return (
    <ViewportBox>
      <Background />
      <Inner size="wide">
        <Heading2>프로덕트 소개</Heading2>
        <MacbookSlide />
        <IntroduceList />
      </Inner>
    </ViewportBox>
  );
}

export default PdIntroduce;
