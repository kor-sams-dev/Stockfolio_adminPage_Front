import React from "react";
import styled from "styled-components";

import coAgencies from "../molecules/coAgencies";
import CoAgenciesItem from "../molecules/CoAgenciesItem";

interface Props {
  imgSrc: string;
  itemId: string;
  title: string;
}

const Title = styled.span`
  font-weight: 700;
`;

const List = styled.ul`
  ${({ theme }) => theme.flexMixin("center", "center")};
`;

function CoAgencies(): JSX.Element {
  return (
    <>
      <Title>협력 기관</Title>
      <List>
        {coAgencies.map((li: Props) => (
          <CoAgenciesItem
            key={li.itemId}
            title={li.title}
            itemId={li.itemId}
            imgSrc={li.imgSrc}
          />
        ))}
      </List>
    </>
  );
}

export default CoAgencies;
