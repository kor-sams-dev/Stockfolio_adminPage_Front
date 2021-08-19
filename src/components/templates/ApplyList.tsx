import React from "react";
import styled from "styled-components";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";
import Label from "../UI/atoms/Labels/Label";
import DeadlineBox from "../UI/molecules/DeadlineBox";

const Container = styled.div`
  min-height: calc(100vh - 353px);
`;

const RecruitListBox = styled.ul`
  margin-bottom: 60px;
`;

const RecruitList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  width: 980px;
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

function ApplyList(): JSX.Element {
  return (
    <Container>
      <ApplyNavBar />
      <RecruitListBox>
        <RecruitList>
          <Box>
            <Label stance="senior" />
            <PaddingBox>
              <Heading2 fontSize={18} fontWeight={700}>
                Front-end Developer
              </Heading2>
            </PaddingBox>
          </Box>
          <DeadlineBox />
        </RecruitList>
        <RecruitList>
          <Box>
            <Label stance="junior" />
            <PaddingBox>
              <Heading2 fontSize={18} fontWeight={700}>
                Software Engineer
              </Heading2>
            </PaddingBox>
          </Box>
          <DeadlineBox />
        </RecruitList>
        <RecruitList>
          <Box>
            <Label stance="senior" />
            <PaddingBox>
              <Heading2 fontSize={18} fontWeight={700}>
                Back-end Developer
              </Heading2>
            </PaddingBox>
          </Box>
          <DeadlineBox />
        </RecruitList>
      </RecruitListBox>
    </Container>
  );
}

export default ApplyList;
