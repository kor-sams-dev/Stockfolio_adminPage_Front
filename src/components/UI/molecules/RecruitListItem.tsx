import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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

const RecruitListItem = observer(() => {
  const { ApplyMenuStore, SelectedContent } = RootStore();
  const { setSelectedContent, viewContent } = ApplyMenuStore;
  const history = useHistory();

  const GoToDetail = (data: MenuProps) => {
    setSelectedContent(data);

    return history.push(`/recruit/apply/${data.id}`);
  };

  return (
    <>
      {toJS(viewContent).map((data: MenuProps) => (
        <ListItem key={data.id} onClick={() => GoToDetail(data)}>
          <Box>
            <Label stance={data.career_type as "신입" | "경력"} />
            <PaddingBox>
              <Heading2 fontSize={18} fontWeight={700}>
                {data.position_title}
              </Heading2>
            </PaddingBox>
          </Box>
          <DeadlineBox>
            <Employment>{data.work_type}</Employment>
            <Deadline>{data.deadline} 마감</Deadline>
          </DeadlineBox>
        </ListItem>
      ))}
    </>
  );
});

export default RecruitListItem;
