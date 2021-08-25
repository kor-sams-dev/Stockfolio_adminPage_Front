import React from "react";
import styled from "styled-components";

import HistoryListItem from "../molecules/HistoryListItem";
import HistoryBar from "../atoms/HistoryBar";

import histories from "../../../assets/data/histories";
import theme from "../../../styles/theme";

const Box = styled.section`
  position: relative;
  padding-top: 100px;
`;

const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Next = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 106px;
  width: 360px;
  background: ${theme.color.main};
  border-radius: 100px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

function HistoryList(): JSX.Element {
  return (
    <Box>
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
        <HistoryBar />
      </List>
      <Next>what&apos;s next?</Next>
    </Box>
  );
}

export default HistoryList;
