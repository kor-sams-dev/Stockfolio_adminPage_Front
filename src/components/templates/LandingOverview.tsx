import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import CoAgencies from "../UI/organisms/CoAgencies";
import ProcessList from "../UI/organisms/ProcessList";

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  text-align: center;
`;

const Title = styled.span`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
`;

function Overview(): JSX.Element {
  return (
    <ViewportBox>
      <Inner size="wide">
        <Divider>
          <Title>몇 년 전 찍은 영상, 이제 깨우러 가자</Title>
          <Desc
            fontColor="black"
            fontSize={16}
            fontWeight={500}
            lineHeight={1.5}
          >
            <>
              정의로운 크리에이터가 자생하는 올인원, 올뉴 영상 제작 생태계
              스톡폴리오.
              <br />
              구간 메모와 클라우드, 그리고 K-감성 영상 마켓의 심포니를
              경험하세요.
            </>
          </Desc>
        </Divider>
        <ProcessList />
        <CoAgencies />
      </Inner>
    </ViewportBox>
  );
}

export default Overview;
