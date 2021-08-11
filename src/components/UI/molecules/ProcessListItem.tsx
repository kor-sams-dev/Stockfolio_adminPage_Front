import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

import { ProcessProps } from "../../../models/landingInterfaces";

import theme from "../../../styles/theme";

const Item = styled.li`
  width: 296px;
`;

const Title = styled.span`
  display: block;
  margin: 40px 0 16px;
  font-weight: 700;
  font-size: 18px;
`;

function ProcessListItem({
  itemId,
  imgSrc,
  imgAlt,
  desc,
}: ProcessProps): JSX.Element {
  return (
    <Item>
      <img src={imgSrc} alt={imgAlt} />
      <Title>{`${itemId}. ${imgAlt}`}</Title>
      <Desc
        fontColor={theme.color.descMedium}
        fontSize={16}
        fontWeight={400}
        lineHeight={1.6}
      >
        {desc}
      </Desc>
    </Item>
  );
}

export default ProcessListItem;
