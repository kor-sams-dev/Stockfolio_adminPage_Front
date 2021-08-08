import React from "react";
import styled from "styled-components";

import IntroduceListItem from "../molecules/IntroduceListItem";

import introduces from "../molecules/introduces";

const List = styled.ul`
  ${({ theme }) => theme.flexMixin("space-around", "start")};
`;

function IntroduceList(): JSX.Element {
  return (
    <List>
      {introduces.map(li => (
        <IntroduceListItem key={li.title} title={li.title} desc={li.desc} />
      ))}
    </List>
  );
}

export default IntroduceList;
