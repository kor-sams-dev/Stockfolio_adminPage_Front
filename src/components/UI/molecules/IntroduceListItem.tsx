import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

import { IntroduceProps } from "../../../models/landingInterfaces";
import handleThemeKey from "../../../utils/handleThemeKey";

const Item = styled.li`
  width: 25%;
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
