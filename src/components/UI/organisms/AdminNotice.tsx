import styled from "styled-components";

import { useLocation, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import theme from "../../../styles/theme";

import Label from "../atoms/Labels/Label";
import Heading2 from "../atoms/texts/Heading2";
import RootStore from "../../../stores/RootStore";
import { MenuApplyProps } from "../../../models/applyInterfaces";

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
  cursor: ${props => (props.isActive ? "auto" : "pointer")};
  font-size: 12px;
  font-weight: 700;
  color: ${props =>
    props.isActive ? `${theme.color.lilac}` : `${theme.color.black}`};

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const AdminNotice = observer((): JSX.Element => {
  const { pathname } = useLocation();
  const history = useHistory();

  const gotodetail = () => {
    history.push("/admin/applynotice");
  };

  const gotoapplicant = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.push("/admin/applicantlist");
    e.stopPropagation();
  };

  const { SelectedContent, AdminApplyMenuStore } = RootStore();

  const { adminviewContent, setSelectedContentAdmin, admintotalContent } =
    AdminApplyMenuStore;

  const GoToDetail = (data: MenuApplyProps) => {
    setSelectedContentAdmin(data);

    return history.push(`/admin/apply/${data.id}`);
  };

  return (
    <>
      {pathname === "/admin" && (
        <AdminNav>
          <NavTitle>채용 공고</NavTitle>
          <NavButton onClick={gotodetail}>전체보기</NavButton>
        </AdminNav>
      )}

      {toJS(adminviewContent).map((li: MenuApplyProps) => {
        return (
          <Applicant key={li.id} onClick={() => GoToDetail(li)}>
            <ListBox>
              <Label stance={li.career_type as "경력" | "신입"} />
              <PaddingBox>
                <Heading2 fontSize={18} fontWeight={700}>
                  {li.position_title}
                </Heading2>
              </PaddingBox>
            </ListBox>
            <PaddingBox>
              <Career>
                {li.work_type} <span>|</span> {li.deadline} 마감
              </Career>
              {li.id === 4 ? (
                <ListButton isActive={li.id === 4} disabled>
                  지원자리스트({li.id})
                </ListButton>
              ) : (
                <ListButton isActive={li.id === 4} onClick={gotoapplicant}>
                  지원자리스트({li.id})
                </ListButton>
              )}
            </PaddingBox>
          </Applicant>
        );
      })}
    </>
  );
});

export default AdminNotice;
