import React from "react";
import styled, { keyframes } from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import Heading1 from "../UI/atoms/texts/Heading1";
import theme from "../../styles/theme";

const ContentContainer = styled.div`
  padding-top: 4%;
`;

const Sub = styled.span`
  font-size: 24px;
  color: ${theme.color.descDark};
`;

const arrowMoving = keyframes`
  0% {
    bottom: 60px
  }
  50% {
    bottom: 40px
  }
  100% {
    bottom: 60px
  }
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${arrowMoving} 2.5s ease-in-out infinite;
`;

function LandingMain(): JSX.Element {
  return (
    <ViewportBox bgColor={`no-repeat url("./images/landingMain.png")`}>
      <Inner size="wide">
        <ContentContainer>
          <Sub>모두가 크리에이터가 될 수 있도록</Sub>
          <Heading1 fontSize={48} fontWeight={700}>
            <>
              누구나 쉽게 영상을
              <br /> 만들 수 있는 세상을 만듭니다.
            </>
          </Heading1>
          <Desc
            fontColor={theme.color.descDark}
            fontSize={16}
            fontWeight={400}
            lineHeight={1.7}
          >
            <>
              영상컨텐츠를 만드는데 드는 시간. 평균 00시간
              <br />
              영상 제작 프로세스를 간소화하여
              <br />
              간편하게 영상제작을 할 수 있도록 도와드립니다.
            </>
          </Desc>
        </ContentContainer>
        <DownArrow>
          <img src="./images/downArrow.png" alt="go down" />
        </DownArrow>
      </Inner>
    </ViewportBox>
  );
}

export default LandingMain;
