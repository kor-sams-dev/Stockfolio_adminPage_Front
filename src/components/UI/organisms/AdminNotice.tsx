import styled from "styled-components";
import React from "react";
import { useLocation } from "react-router-dom";
import theme from "../../../styles/theme";
import { AdminApplicant } from "../../../models/adminMainMenu";
import adminMainMenu from "../../../assets/data/adminMainMenu";
import Label from "../atoms/Labels/Label";
import Heading2 from "../atoms/texts/Heading2";

const AdminNav = styled.ul`
  font-size: 18px;
  color: ${theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  height: 82px;
  margin: 16px 0px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const PaddingBox = styled.div`
  padding-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Career = styled.div`
  text-align: right; 
  }
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

const AdminNotice = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/admin/main" && (
        <AdminNav>
          <NavTitle>최근 지원자</NavTitle>
          <NavButton>전체보기</NavButton>
        </AdminNav>
      )}
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
    </>
  );
};

export default AdminNotice;
