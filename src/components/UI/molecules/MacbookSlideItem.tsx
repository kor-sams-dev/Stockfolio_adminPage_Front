import React from "react";
import styled from "styled-components";

interface Props {
  imgSrc: string;
  imgAlt: string;
}

const SlideItem = styled.li`
  padding: 0 8px;
`;

function MacbookSlideItem({ imgSrc, imgAlt }: Props): JSX.Element {
  return (
    <SlideItem>
      <img src={imgSrc} alt={imgAlt} />
    </SlideItem>
  );
}

export default MacbookSlideItem;
