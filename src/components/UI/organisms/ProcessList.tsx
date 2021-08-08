import React from "react";
import styled from "styled-components";

import ProcessListItem from "../molecules/ProcessListItem";

import processData from "../molecules/processData";

const List = styled.ol`
  ${({ theme }) => theme.flexMixin("space-around", "center")};
  margin: 38px 0 105px;
`;

function ProcessList(): JSX.Element {
  return (
    <List>
      {processData.map(li => (
        <ProcessListItem
          key={li.itemId}
          itemId={li.itemId}
          imgSrc={li.imgSrc}
          title={li.title}
          desc={li.desc}
        />
      ))}
    </List>
  );
}

export default ProcessList;
