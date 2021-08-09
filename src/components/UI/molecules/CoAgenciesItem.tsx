import React from "react";
import styled from "styled-components";

import { ImgProps } from "../../../models/commonInterfaces";

const Item = styled.li`
  & + li {
    margin-left: 30px;
  }
`;

function CoAgenciesItem({ imgSrc, imgAlt }: ImgProps): JSX.Element {
  return (
    <Item>
      <img src={imgSrc} alt={imgAlt} />
    </Item>
  );
}

export default CoAgenciesItem;
