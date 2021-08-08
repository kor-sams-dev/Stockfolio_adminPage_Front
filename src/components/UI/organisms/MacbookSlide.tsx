import React from "react";
import styled from "styled-components";

import MacbookSlideItem from "../molecules/MacbookSlideItem";
import ArrowBtn from "../atoms/buttons/ArrowBtn";

const Box = styled.section`
  ${({ theme }) => theme.flexMixin("center", "center")};
  position: relative;
  margin: 58px 0 35px;
`;

const ViewingSection = styled.div`
  position: absolute;
  width: 600px;
  height: 395px;
  overflow: hidden;
`;

const SlideBox = styled.ul`
  ${({ theme }) => theme.flexMixin("start", "start")};
  position: absolute;
  top: 0;
  left: 0;
`;

function MacbookSlide(): JSX.Element {
  return (
    <Box>
      <ArrowBtn direction="prev" />
      <img src="./images/macbookProDisplay.png" alt="macbook pro" />
      <ViewingSection>
        <SlideBox>
          {[...Array(3)].map((_, i) => (
            <MacbookSlideItem
              key={`introduceDisplay${i + 1}`}
              imgSrc={`./images/introduceDisplay${i + 1}.png`}
              imgAlt={`introduceDisplay${i + 1}`}
            />
          ))}
        </SlideBox>
      </ViewingSection>
      <ArrowBtn direction="next" />
    </Box>
  );
}

export default MacbookSlide;
