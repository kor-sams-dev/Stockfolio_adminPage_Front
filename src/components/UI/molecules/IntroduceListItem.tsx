import React from "react";
import styled from "styled-components";

import Desc from "../atoms/texts/Desc";

interface Props {
  title: string;
  desc: string;
}

const Item = styled.li`
  width: 25%;
  color: ${({ theme }) => theme.colorLightGrey};
`;

const Title = styled.em`
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
`;

function IntroduceListItem({ title, desc }: Props): JSX.Element {
  return (
    <Item>
      <Title>{title}</Title>
      <Desc fontColor="inherit" fontSize="14" fontWeight="400">
        {desc}
      </Desc>
    </Item>
  );
}

export default IntroduceListItem;
