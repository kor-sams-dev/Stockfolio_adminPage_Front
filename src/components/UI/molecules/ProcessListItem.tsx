import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

interface Props {
  imgSrc: string;
  itemId: string;
  title: string;
  desc: string;
}

const Item = styled.li`
  width: 296px;
`;

const Title = styled.span`
  display: block;
  margin: 20px 0;
  font-weight: 700;
`;

function ProcessListItem({ itemId, imgSrc, title, desc }: Props): JSX.Element {
  return (
    <Item>
      <img src={imgSrc} alt={title} />
      <Title>{`${itemId}. ${title}`}</Title>
      <Desc fontSize="16" fontColor="#595E66" fontWeight="400">
        {`${desc}`}
      </Desc>
    </Item>
  );
}

export default ProcessListItem;
