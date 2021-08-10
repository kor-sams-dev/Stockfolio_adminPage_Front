import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import RootStore from "../../../../stores/RootStore";
import { IdxProps } from "../../../../models/commonInterfaces";

const { ScrollStore } = RootStore();

interface EventProps {
  isActive?: boolean;
}

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.Main : theme.color.BgGrey};
  transition: background 0.5s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border: ${({ theme }) => `1px solid ${theme.color.Main}`};
    border-radius: 50%;
    opacity: ${({ isActive }: EventProps) => (isActive ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const DotBtn = observer(({ idx }: IdxProps) => {
  const isActive = Math.abs(ScrollStore.viewingSectionIdx) === idx;

  return (
    <Dot
      onClick={() => ScrollStore.changeViewingSectionIdx(idx * -1)}
      isActive={isActive}
    />
  );
});

export default DotBtn;
