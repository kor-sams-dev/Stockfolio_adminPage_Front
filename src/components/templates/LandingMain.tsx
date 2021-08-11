import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import Heading1 from "../UI/atoms/texts/Heading1";
import theme from "../../styles/theme";

const FlexBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -90px;
`;

const ImgContainer = styled.div`
  position: relative;
  height: 874px;
  width: 675px;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding-bottom: 101px;

  &::after {
    content: "";
    position: absolute;
    bottom: 68px;
    left: 0;
    width: 60px;
    border: 2px solid ${theme.color.main};
  }
`;

const Sub = styled.span`
  font-size: 24px;
`;

function LandingMain(): JSX.Element {
  return (
    <ViewportBox>
      <Inner size="wide">
        <FlexBox>
          <ImgContainer>
            <img src="./images/mainFrame.png" alt="frame" />
            <img src="./images/mainImage.png" alt="main" />
          </ImgContainer>
          <ContentContainer>
            <Sub>센스쟁이 크리에이터를 위한</Sub>
            <Heading1 fontWeight={700}>
              <>
                저작권 걱정 없는
                <br /> 한국형 영상 저장소
              </>
            </Heading1>
            <Desc
              fontColor="black"
              fontSize={18}
              fontWeight={400}
              lineHeight={1.7}
            >
              <>
                해외 스톡 사이트에서 한국영상 찾아
                <br />
                헤매이던 지난 날은 안녕!
                <br />
                한국인의, 한국인에 의한, 한국인을 위한
                <br />
                올인원 스톡 저장소 스톡폴리오입니다.
              </>
            </Desc>
          </ContentContainer>
        </FlexBox>
      </Inner>
    </ViewportBox>
  );
}

export default LandingMain;
