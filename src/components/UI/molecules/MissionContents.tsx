import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Desc from "../atoms/texts/Desc";
import Heading4 from "../atoms/texts/Heading4";

import theme from "../../../styles/theme";
import RootStore from "../../../stores/RootStore";

const { MissionStore } = RootStore();

interface EventProps {
  isActive: boolean;
}

const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px 40px 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ isActive }: EventProps) => (isActive ? 1 : 0)};
  transition: opacity 0.3s ease-out;
`;

const Item = styled.li`
  & + li {
    margin-top: 42px;
  }
`;

const MissionContents = observer(() => {
  return (
    <List isActive={MissionStore.isActive}>
      <Item>
        <Heading4 fontColor="#ffffff" fontSize={24} fontWeight={700}>
          스톡폴리오는?
        </Heading4>
        <Desc fontColor={theme.color.lightGrey} fontSize={14} lineHeight={1.7}>
          &lsquo;스톡폴리오&rsquo;는 공정성을 추구하는 크리에이터에게 편리한
          환경을 조성 및 제공해주는 스타트업입니다. 누구나 크리에이터가 될 수
          있도록 콘텐츠 템플릿을 제공하는 스톡폴리오는 공정한 콘텐츠의 선순환
          생태계를 만들며 임직원이 함께 성장해 나가는 것을 목표로 합니다. 또한
          &lsquo;스톡폴리오&rsquo;는 플랫폼과 데이터 기반의 혁신적인 서비스를
          통해 시장을 개척하고 새로운 이정표를 제시합니다.
        </Desc>
      </Item>
      <Item>
        <Heading4 fontColor="#ffffff" fontSize={24} fontWeight={700}>
          창업의 시작
        </Heading4>
        <Desc fontColor={theme.color.lightGrey} fontSize={14} lineHeight={1.7}>
          스톡폴리오의 CEO인 오연우님은 과학 유튜브 채널을 운영하던 중 한국의
          저작권 문제에 대해 발견하게 됩니다. 타인의 저작물을 그대로
          복사/붙여넣기 하는 등 저작권을 위반하고도 정작 문제를 인식하지 못하는
          점에 대한 해결책이 필요했습니다. 하지만 이러한 문제에 대해 인식하지
          못하는 상태에서 &quot;게시물의 원작자에게 허락을 받고 출처를 밝힌 후
          업로드하세요&quot;라는 지침을 따르는 것은 역부족이라고 판단했습니다.
          따라서 오연우님은 스톡폴리오를 창업해 &quot;상업적으로 이용가능한
          콘텐츠&quot;를 제공해 저작권 문제를 없애는 플랫폼을 만들고자 했습니다.
          단순히 제공만 하는 것이 아니라 크리에이터들이 플랫폼에 직접 판매까지
          할 수 있는 기능까지 더하며 지금의 &lsquo;공정한 콘텐츠 C2C
          플랫폼&rsquo;이라는 스톡폴리오 비즈니스 모델이 탄생했습니다.
        </Desc>
      </Item>
    </List>
  );
});

export default MissionContents;
