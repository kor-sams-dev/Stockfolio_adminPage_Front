import React from "react";
import styled from "styled-components";

import Heading2 from "../atoms/texts/Heading2";
import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

const OverViewBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px 0 20px 0;
`;

const HeadingBox = styled.div`
  margin-bottom: 12px;
`;

function OverViewCard(): JSX.Element {
  return (
    <OverViewBox>
      <HeadingBox>
        <Heading2 fontWeight={700}>스폴러가 되기까지</Heading2>
      </HeadingBox>
      <Desc
        fontColor={theme.color.black}
        fontSize={14}
        fontWeight={400}
        lineHeight={1.5}
      >
        <>
          스톡폴리오는 현재까지 빠른 실행력으로 콘텐츠 기업의 시작점에 서있게
          되었습니다. 콘텐츠 기업으로서 다소 장황하지만
          <br />
          확실한 소셜미션을 가지고있는 만큼, 스톡폴리오에 딱 맞는 인재를
          탐색중입니다.
        </>
      </Desc>
    </OverViewBox>
  );
}

export default OverViewCard;
