import React from "react";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import HistoryList from "../UI/organisms/HistoryList";

function History(): JSX.Element {
  return (
    <ViewportBox>
      <Inner size="wide">
        <Heading2 fontWeight={700}>스폴이 걸어온 길</Heading2>
        <HistoryList />
      </Inner>
    </ViewportBox>
  );
}

export default History;
