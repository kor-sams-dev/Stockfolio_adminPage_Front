import React from "react";
import styled from "styled-components";

import coAgencies from "../molecules/coAgencies";
import CoAgenciesItem from "../molecules/CoAgenciesItem";

const Title = styled.span`
  margin-left: 58px;
  font-weight: 700;
  font-size: 18px;
`;

const List = styled.ul`
  ${({ theme }) => theme.flexMixin("center", "center")};
  margin-top: 16px;
`;

function CoAgencies(): JSX.Element {
  return (
    <>
      <Title>협력 기관</Title>
      <List>
        {coAgencies.map(li => (
          <CoAgenciesItem key={li.title} title={li.title} imgSrc={li.imgSrc} />
        ))}
      </List>
    </>
  );
}

export default CoAgencies;
