import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import Heading2 from "../atoms/texts/Heading2";
import theme from "../../../styles/theme";
import Label from "../atoms/Labels/Label";

import RootStore from "../../../stores/RootStore";
import { MenuProps } from "../../../models/applyInterfaces";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  height: 74px;
  border-radius: 16px;

  & + li {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const PaddingBox = styled.div`
  padding-left: 24px;
`;

const DeadlineBox = styled.div`
  display: flex;
  align-items: center;
`;

const Employment = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const Deadline = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;

  &::before {
    content: "|";
    padding-right: 7px;
  }
`;

const RecruitListItem = observer((): any => {
  const { ApplyMenuStore } = RootStore();
  const { clicked, totalContent, viewContent } = ApplyMenuStore;

  useEffect(() => {
    const setDepartment = (arr: any) => {
      if (arr.position === clicked) {
        return true;
      }
      return false;
    };

    ApplyMenuStore.setViewContent(totalContent.filter(setDepartment));
  }, [ApplyMenuStore.clicked]);

  return (
    <>
      {toJS(viewContent).map((data: MenuProps) => (
        <ListItem key={data.title}>
          <Box>
            <Label stance={data.stance as "senior" | "junior"} />
            <PaddingBox>
              <Heading2 fontSize={18} fontWeight={700}>
                {data.title}
              </Heading2>
            </PaddingBox>
          </Box>
          <DeadlineBox>
            <Employment>{data.employment}</Employment>
            <Deadline>{data.deadline} 마감</Deadline>
          </DeadlineBox>
        </ListItem>
      ))}
    </>
  );
});

export default RecruitListItem;
