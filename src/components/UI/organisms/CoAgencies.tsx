import React from "react";
import styled from "styled-components";

import CoAgenciesItem from "../molecules/CoAgenciesItem";

import coAgencies from "../../../assets/data/coAgencies";

const Title = styled.span`
  margin-left: 57px;
  font-weight: 700;
  font-size: 18px;
`;

const List = styled.ul`
  ${({ theme }) => theme.mixin.flex("center", "center")};
  margin-top: 17px;
`;

function CoAgencies(): JSX.Element {
  return (
    <>
      <Title>협력 기관</Title>
      <List>
        {coAgencies.map(li => (
          <CoAgenciesItem
            key={li.imgAlt}
            imgAlt={li.imgAlt}
            imgSrc={li.imgSrc}
          />
        ))}
      </List>
    </>
  );
}

export default CoAgencies;
