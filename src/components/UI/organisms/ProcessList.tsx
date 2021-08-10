import React from "react";
import styled from "styled-components";

import ProcessListItem from "../molecules/ProcessListItem";

import processData from "../../../assets/data/processData";

const List = styled.ol`
  ${({ theme }) => theme.mixin.flex("space-around", "center")};
  margin: 43px 0 108px;
`;

function ProcessList(): JSX.Element {
  return (
    <List>
      {processData.map(li => (
        <ProcessListItem
          key={li.itemId}
          itemId={li.itemId}
          imgSrc={li.imgSrc}
          imgAlt={li.imgAlt}
          desc={li.desc}
        />
      ))}
    </List>
  );
}

export default ProcessList;
