import React from "react";
import styled from "styled-components";

import IntroduceListItem from "../molecules/IntroduceListItem";

import introduces from "../../../assets/data/introduces";

const List = styled.ul`
  ${({ theme }) => theme.mixin.flex("space-around", "flex-start")};
`;

function IntroduceList(): JSX.Element {
  return (
    <List>
      {introduces.map((li, idx) => (
        <IntroduceListItem
          key={li.title}
          title={li.title}
          desc={li.desc}
          idx={idx}
        />
      ))}
    </List>
  );
}

export default IntroduceList;
