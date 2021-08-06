import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "./ChildrenPropsType";

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

function Logo({ children }: ChildrenPropsType): JSX.Element {
  return (
    <div>
      <IMG src={`${children}`} alt={`${children}`} />
    </div>
  );
}

export default Logo;
