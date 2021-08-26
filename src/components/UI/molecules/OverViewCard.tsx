import React from "react";
import styled from "styled-components";

import Heading2 from "../atoms/texts/Heading2";
import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

import overviewCardData from "../../../assets/data/overviewCardData";
import Inner from "../../../styles/Inner";

interface OverviewProps {
  itemId: string;
}

const OverViewBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px 0 20px 0;
`;

const HeadingBox = styled.div`
  margin-bottom: 12px;
`;

function OverViewCard({ itemId }: OverviewProps): JSX.Element {
  return (
    <Inner size="narrow">
      <OverViewBox>
        <HeadingBox>
          <Heading2 fontWeight={700}>
            {overviewCardData[itemId as keyof typeof overviewCardData].title}
          </Heading2>
        </HeadingBox>
        <Desc
          fontColor={theme.color.black}
          fontSize={14}
          fontWeight={400}
          lineHeight={1.5}
        >
          {overviewCardData[itemId as keyof typeof overviewCardData].desc}
        </Desc>
      </OverViewBox>
    </Inner>
  );
}

export default OverViewCard;
