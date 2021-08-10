import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

import { IntroduceProps } from "../../../models/landingInterfaces";
import handleThemeKey from "../../../utils/handleThemeKey";

const Item = styled.li`
  position: relative;
  width: 25%;

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

const Title = styled.em`
  display: inline-block;
  margin-bottom: 38px;
  font-weight: 700;
  font-size: 18px;
`;

function IntroduceListItem({ title, desc }: IntroduceProps): JSX.Element {
  return (
    <Item>
      <Title>{title}</Title>
      <Desc
        fontColor={handleThemeKey("colorLightGrey")}
        fontSize={14}
        fontWeight={400}
        lineHeight={1.7}
      >
        {desc}
      </Desc>
    </Item>
  );
}

export default IntroduceListItem;
