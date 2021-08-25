import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import RootStore from "../../../../stores/RootStore";
import { IdxProps } from "../../../../models/commonInterfaces";

import theme from "../../../../styles/theme";

const { ScrollStore } = RootStore();

interface EventProps {
  isActive: boolean;
}

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ isActive }: EventProps) =>
    isActive ? theme.color.main : "#ccc"};
  transition: background 0.5s ease-in-out;
  cursor: pointer;
`;

const handleViewingSection = (idx: number) => {
  ScrollStore.setViewingSectionIdx(idx);
  window.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" });
};

const DotBtn = observer(({ idx }: IdxProps) => {
  return (
    <Dot
      onClick={() => handleViewingSection(idx)}
      isActive={ScrollStore.viewingSectionIdx === idx}
    />
  );
});

export default DotBtn;
