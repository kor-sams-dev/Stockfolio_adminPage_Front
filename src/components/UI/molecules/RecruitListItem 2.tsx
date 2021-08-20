import React from "react";
import styled from "styled-components";

import Heading2 from "../atoms/texts/Heading2";
import theme from "../../../styles/theme";
import Label from "../atoms/Labels/Label";

import recruitListItemData from "../../../assets/data/mockData/recruitListItemData";

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

function RecruitListItem(): JSX.Element {
  return (
    <>
      {recruitListItemData[0].recruitList.map(data => (
        <ListItem key={data.itemId}>
          <Box>
            <Label stance="senior" />
            {/* <Label stance={data.stance} /> */}
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
      {/* <ListItem>
        <Box>
          <Label stance="senior" />
          <PaddingBox>
            <Heading2 fontSize={18} fontWeight={700}>
              Front-end Developer
            </Heading2>
          </PaddingBox>
        </Box>
        <DeadlineBox />
      </ListItem>
      <ListItem>
        <Box>
          <Label stance="junior" />
          <PaddingBox>
            <Heading2 fontSize={18} fontWeight={700}>
              Software Engineer
            </Heading2>
          </PaddingBox>
        </Box>
        <DeadlineBox />
      </ListItem>
      <ListItem>
        <Box>
          <Label stance="senior" />
          <PaddingBox>
            <Heading2 fontSize={18} fontWeight={700}>
              Back-end Developer
            </Heading2>
          </PaddingBox>
        </Box>
        <DeadlineBox />
      </ListItem> */}
    </>
  );
}

export default RecruitListItem;
