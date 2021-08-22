import React, { useEffect } from "react";
import styled from "styled-components";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import RecruitList from "../UI/organisms/RecruitList";

import recruitListItemData from "../../assets/data/mockData/recruitListItemData";
import RootStore from "../../stores/RootStore";

const Container = styled.div`
  min-height: calc(100vh - 353px);
`;

function ApplyList(): JSX.Element {
  useEffect(() => {
    const { ApplyMenuStore } = RootStore();
    ApplyMenuStore.setTotalContent(recruitListItemData);

    const isDev = (arr: any) => {
      if (arr.position === "개발") {
        return true;
      }
      return false;
    };

    ApplyMenuStore.setViewContent(ApplyMenuStore.totalContent.filter(isDev));
  }, []);

  return (
    <Container>
      <ApplyNavBar />
      <RecruitList />
    </Container>
  );
}

export default ApplyList;
