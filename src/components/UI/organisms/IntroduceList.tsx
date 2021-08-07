import React from "react";
import styled from "styled-components";

import IntroduceListItem from "../molecules/IntroduceListItem";

import introduces from "../molecules/introduces";

interface Props {
  title: string;
  desc: string;
  itemId: string;
}

const List = styled.ul`
  ${({ theme }) => theme.flexMixin("space-around", "start")};
  margin-top: 60px;
`;

function IntroduceList(): JSX.Element {
  return (
    <List>
      {introduces.map((li: Props) => (
        <IntroduceListItem key={li.itemId} title={li.title} desc={li.desc} />
      ))}
    </List>
  );
}

export default IntroduceList;
