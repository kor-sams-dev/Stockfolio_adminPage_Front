import React from "react";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import MacbookSlide from "../UI/organisms/MacbookSlide";
import IntroduceList from "../UI/organisms/IntroduceList";

function PdIntroduce(): JSX.Element {
  return (
    <ViewportBox>
      <Inner size="wide">
        <Heading2 fontWeight={700} fontSize={24}>
          프로덕트 소개
        </Heading2>
        <MacbookSlide />
        <IntroduceList />
      </Inner>
    </ViewportBox>
  );
}

export default PdIntroduce;
