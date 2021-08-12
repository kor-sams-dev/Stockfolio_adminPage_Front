import React from "react";
import styled from "styled-components";

import ProcessListItem from "../molecules/ProcessListItem";

import processData from "../../../assets/data/processData";

const List = styled.ol`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 116px 0 0;
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
