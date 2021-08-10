import React from "react";
import styled from "styled-components";

import { ImgProps } from "../../../models/commonInterfaces";

const SlideItem = styled.li`
  padding: 0 8px;
`;

function MacbookSlideItem({ imgSrc, imgAlt }: ImgProps): JSX.Element {
  return (
    <SlideItem>
      <img src={imgSrc} alt={imgAlt} />
    </SlideItem>
  );
}

export default MacbookSlideItem;
