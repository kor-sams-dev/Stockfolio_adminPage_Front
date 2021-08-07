import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../atoms/ChildrenPropsType";

interface Props extends ChildrenPropsType {
  imgSrc: string;
  title: string;
}

const Item = styled.li`
  & + li {
    margin-left: 30px;
  }
`;

function CoAgenciesItem({ imgSrc, title }: Props): JSX.Element {
  return (
    <Item>
      <img src={imgSrc} alt={title} />
    </Item>
  );
}

export default CoAgenciesItem;
