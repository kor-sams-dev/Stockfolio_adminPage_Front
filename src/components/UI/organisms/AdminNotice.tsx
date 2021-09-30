import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { MenuApplyProps } from "../../../models/applyInterfaces";

import Label from "../atoms/Labels/Label";
import Heading2 from "../atoms/texts/Heading2";

const AdminNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto 16px;
  font-size: 18px;
  color: ${theme.color.black};
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const NavTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.black};
`;

const NavButton = styled.div`
  margin-right: 32px;
  font-size: 13px;
  color: ${theme.color.grey2};
  cursor: pointer;
`;

const Applicant = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  height: 82px;
  border: none;
  background: ${theme.color.white};
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const PaddingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
`;

const Career = styled.div`
  text-align: right;
`;

const ListButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  margin-right: 32px;
  padding: 6px 0;
  width: 112px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${theme.color.grey1};
  background-color: ${theme.color.white};
  font-size: 12px;
  font-weight: 700;
  color: ${props =>
    props.isActive ? `${theme.color.lilac}` : `${theme.color.black}`};
  cursor: ${props => (props.isActive ? "auto" : "pointer")};

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

  const { AdminApplyMenuStore } = RootStore();

  const { adminviewContent, setSelectedContentAdmin } = AdminApplyMenuStore;

  const GoToDetail = (data: MenuApplyProps) => {
    setSelectedContentAdmin(data);
    return history.push(`/admin/apply/${data.id}`);
  };

  const gotoapplicant = (data: MenuApplyProps) => {
    setSelectedContentAdmin(data);

    return history.push(`/admin/applicantlist/${data.id}`);
  };

  const eventstop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
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
              {li.applicants_num === 0 ? (
                <ListButton isActive={li.applicants_num === 0} disabled>
                  지원자리스트({li.applicants_num})
                </ListButton>
              ) : (
                <ListButton
                  isActive={li.applicants_num === 0}
                  onClick={e => {
                    gotoapplicant(li);
                    eventstop(e);
                  }}
                >
                  지원자리스트({li.applicants_num})
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
