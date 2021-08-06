import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../atoms/ChildrenPropsType";

const Item = styled.li`
  & + li {
    margin-left: 30px;
  }
`;

function CoAgenciesItem({ imgSrc, title }: ChildrenPropsType): JSX.Element {
  return (
    <Item>
      <img src={imgSrc} alt={title} />
    </Item>
  );
}

export default CoAgenciesItem;
