import React from "react";
import styled from "styled-components";

import HistoryListItem from "../molecules/HistoryListItem";
import HistoryBar from "../atoms/HistoryBar";

import histories from "../../../assets/data/histories";

const Box = styled.section`
  position: relative;
  padding-top: 100px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function HistoryList(): JSX.Element {
  return (
    <Box>
      <HistoryBar />
      <List>
        {histories.map((li, idx) => (
          <HistoryListItem
            key={li.itemId}
            idx={idx}
            itemId={li.itemId}
            isEven={Number(li.itemId) % 2 === 0}
            title={li.title}
            date={li.date}
            desc={li.desc}
          />
        ))}
      </List>
    </Box>
  );
}

export default HistoryList;
