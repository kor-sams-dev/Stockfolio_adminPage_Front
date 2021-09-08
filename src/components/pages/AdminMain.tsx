import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import Label from "../UI/atoms/Labels/Label";
import Heading2 from "../UI/atoms/texts/Heading2";
import adminMainMenu from "../../assets/data/adminMainMenu";
import { AdminMenu, AdminApplicant } from "../../models/adminMainMenu";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const Admin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AdminBox = styled.div`
  width: 212px;
  height: 140px;
  margin-top: 40px;
  border: 1px solid ${theme.color.greyLight2};
  margin-right: 16px;
  margin-bottom: 60px;
  border-radius: 8px;
`;

const StringSpan = styled.div`
  font-weight: 400;
  color: ${theme.color.black};
  margin: 16px 0px 0px 20px;
  font-size: 16px;
`;

const NumberSpan = styled.div`
  font-weight: 700;
  color: ${theme.color.mainDeep};
  font-size: 40px;
  text-align: right;
  margin: 39px 24px 24px 0px;
`;

const AdminNav = styled.ul`
  font-size: 18px;
  color: ${theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 980px; */
  margin: 0 auto;
  margin-bottom: 16px;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const NavTitle = styled.div`
  font-size: 18px;
  color: ${theme.color.black};
  font-weight: 700;
`;
const NavButton = styled.div`
  font-size: 13px;
  color: ${theme.color.grey2};
  cursor: pointer;
  margin-right: 32px;
`;

const Applicant = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: ${theme.color.white};
  border-radius: 16px;
  cursor: pointer;
  /* width: 980px; */
  height: 82px;
  margin: 16px 0px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  font-size: 12px;
  margin-left: 24px;
  position: relative;
`;

const Title = styled.div`
  font-size: 12px;
  color: ${theme.color.grey2};
  font-weight: 400;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
`;

const ContentWrap = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.black};
  margin-right: 24px;
  line-height: 20px;
  span {
    margin: 0px 8px 0px 8px;
    color: ${theme.color.grey1};
  }
`;

const Career = styled.div`
  text-align: right; 
  }
`;

const Email = styled.div`
  font-size: 12px;
`;

const ListButton = styled.button`
  background-color: ${theme.color.white};
  width: 112px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.grey1};
  margin-left: 24px;
  margin-right: 32px;
  padding: 6px 0;
  cursor: pointer;
  span {
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.black};
  }

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const Label2 = styled.div`
  background-color: ${theme.color.red2};
  width: 38px;
  height: 18px;
  border-radius: 100px;
  position: absolute;
  bottom: 6px;
  left: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  span {
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.white};
  }
`;

const PaddingBox = styled.div`
  padding-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminMain = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <Admin>
          {adminMainMenu.data.menu.map((data: AdminMenu) => {
            return (
              <AdminBox key={data.context}>
                <StringSpan>{data.context}</StringSpan>
                <NumberSpan>{data.number}</NumberSpan>
              </AdminBox>
            );
          })}
        </Admin>
        <AdminNav>
          <NavTitle>채용 공고</NavTitle>
          <NavButton>전체보기</NavButton>
        </AdminNav>
        {adminMainMenu.data.applicant.map((data: AdminApplicant) => {
          return (
            <Applicant key={data.idx}>
              <ListBox>
                <Label stance={data.label as "경력" | "신입"} />
                <PaddingBox>
                  <Heading2 fontSize={18} fontWeight={700}>
                    {data.developer}
                  </Heading2>
                </PaddingBox>
              </ListBox>
              <PaddingBox>
                <Career>
                  {data.career} <span>|</span> {data.date} 마감
                </Career>
                <ListButton>
                  <span>지원자리스트({data.number})</span>
                </ListButton>
              </PaddingBox>
            </Applicant>
          );
        })}
        <AdminNav>
          <NavTitle>최근 지원자</NavTitle>
          <NavButton>전체보기</NavButton>
        </AdminNav>
        <Applicant>
          <TitleWrap>
            <Title>Back-end Developer 채용</Title>
            <Name>이재성</Name>
            <Label2>
              <span>new</span>
            </Label2>
          </TitleWrap>
          <ContentWrap>
            <Career>
              경력 10년 <span>|</span> 2021-09-21
            </Career>
            <Email>
              stock@naver.com <span>|</span> 010-1234-5685
            </Email>
          </ContentWrap>
        </Applicant>
      </Inner>
    </Box>
  );
};

export default AdminMain;
