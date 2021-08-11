import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

import { ProcessProps } from "../../../models/landingInterfaces";

import handleThemeKey from "../../../utils/handleThemeKey";

const Item = styled.li`
  width: 296px;
`;

const Title = styled.span`
  display: block;
  margin: 24px 0 27px;
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
        fontColor={handleThemeKey("desc")}
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
