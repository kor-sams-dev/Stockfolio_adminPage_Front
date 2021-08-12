import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { observer } from "mobx-react";
import MacbookSlideItem from "../molecules/MacbookSlideItem";

import theme from "../../../styles/theme";

import slides from "../../../assets/data/slides";
import settings from "../../../assets/data/carouselSetting";

const Box = styled.section`
  position: relative;
  margin: 58px 0 40px;
`;

const Macbook = styled.img`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const progressing = keyframes`
  from{
    width: 0%
  }
  to{
    width: 100%
  }
`;

const SlideBox = styled(Slider)`
  margin: 0 auto;
  padding-top: 20px;
  width: 579px;

  .slick-dots {
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 204px;

    li {
      position: relative;
      display: inline-block;
      margin: 0;
      width: 60px;
      height: 6px;
      border-radius: 8px;
      background: #eee;

      &.slick-active {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 8px;
          background: ${theme.color.main};
          animation: ${progressing} 5s linear;
        }
      }

      & + li {
        margin-left: 12px;
      }

      button {
        padding: 0;
        width: 100%;
        height: 100%;

        &::before {
          content: "";
          position: static;
          width: 0;
          height: 0;
          font-size: 0;
          line-height: 0;
        }
      }
    }
  }
`;

const MacbookSlide = observer(() => {
  return (
    <Box>
      <Macbook src="./images/macbookProDisplay.png" alt="macbook pro" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SlideBox {...settings}>
        {slides.map(item => (
          <MacbookSlideItem
            key={item.imgAlt}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </SlideBox>
    </Box>
  );
});

export default MacbookSlide;
