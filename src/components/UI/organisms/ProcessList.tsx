import React from "react";
import styled from "styled-components";

import ProcessListItem from "../molecules/ProcessListItem";

import processData from "../molecules/processData";

interface Props {
  imgSrc: string;
  itemId: string;
  title: string;
  desc: string;
}

const List = styled.ol`
  ${({ theme }) => theme.flexMixin("space-around", "center")};
  margin: 50px 0 110px;
`;

function ProcessList(): JSX.Element {
  return (
    <List>
      {processData.map((li: Props) => (
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
