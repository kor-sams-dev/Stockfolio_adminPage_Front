import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import Heading1 from "../UI/atoms/texts/Heading1";

const Box = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")};
  margin-top: 20px;
`;

const FlexBox = styled.div`
  ${({ theme }) => theme.flexMixin("space-between", "flex-end")};
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
  padding-bottom: 120px;

  &::after {
    content: "";
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 60px;
    border-top: ${({ theme }) => `2px solid ${theme.colorMain}`};
  }
`;

function LandingMain(): JSX.Element {
  return (
    <Box>
      <Inner size="wide">
        <FlexBox>
          <ImgContainer>
            <img src="./images/Frame 3.png" alt="frame" />
            <img src="./images/Mask Group.png" alt="main" />
          </ImgContainer>
          <ContentContainer>
            <span>센스쟁이 크리에이터를 위한</span>
            <Heading1>
              <>
                저작권 걱정 없는
                <br /> 한국형 영상 저장소
              </>
            </Heading1>
            <Desc fontColor="black" fontSize="18" fontWeight="400">
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
    </Box>
  );
}

export default LandingMain;
