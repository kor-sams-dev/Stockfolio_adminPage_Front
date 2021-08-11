import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Desc from "../UI/atoms/texts/Desc";
import ProcessList from "../UI/organisms/ProcessList";

import theme from "../../styles/theme";

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  text-align: center;
`;

const Title = styled.span`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 40px;
`;

function Overview(): JSX.Element {
  return (
    <ViewportBox bgColor={theme.color.bgLight}>
      <Inner size="wide">
        <Divider>
          <Title>짧은 영상부터 긴 영상까지.</Title>
          <Desc
            fontColor={theme.color.descMedium}
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
      </Inner>
    </ViewportBox>
  );
}

export default Overview;
