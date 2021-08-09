import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

import handleThemeKey from "../../../utils/handleThemeKey";
import { ProcessProps } from "../../../models/landingInterfaces";

const Item = styled.li`
  width: 296px;
`;

const Title = styled.span`
  display: block;
  position: relative;
  margin: 24px 0 27px 4px;
  font-weight: 700;
  font-size: 18px;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 1px;
    height: 1px;
    border: 7px solid transparent;
    border-bottom: ${({ theme }) => `7px solid ${theme.colorMain}`};
  }
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
        fontColor={handleThemeKey("colorDesc")}
        fontSize={16}
        fontWeight={400}
        lineHeight={1.6}
      >
        {`${desc}`}
      </Desc>
    </Item>
  );
}

export default ProcessListItem;
