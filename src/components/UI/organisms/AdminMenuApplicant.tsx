import styled from "styled-components";
import { useLocation, useHistory, Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";
import AdminApplicantStore from "../../../stores/AdminApplicantStore";
import { AdminRecentApplicant1 } from "../../../models/adminMainMenu";

const AdminNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 60px auto 16px;
  font-size: 18px;
  color: ${theme.color.black};
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

const Applicant = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: ${theme.color.white};
  border-radius: 16px;
  height: 82px;
  margin: 16px 0px;
  margin-right: 32px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  position: relative;
  margin-left: 24px;
  font-size: 12px;
`;

const Title1 = styled.div`
  margin-left: 258px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.color.mainDeep};
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
`;

const Email = styled.div`
  font-size: 12px;
`;

const Label2 = styled.div`
  background-color: ${theme.color.red2};
  width: 38px;
  height: 18px;
  border-radius: 100px;

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

const NameWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AdminMenuApplicant = observer((): JSX.Element => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { ApplicantList } = AdminApplicantStore;

  const gotodetail = () => {
    history.push("/admin/current");
  };

  return (
    <>
      {pathname === "/admin" && (
        <AdminNav>
          <NavTitle>최근 지원자</NavTitle>
          <NavButton onClick={gotodetail}>전체보기</NavButton>
        </AdminNav>
      )}
      {toJS(ApplicantList)
        .slice(0, 5)
        .map((data: AdminRecentApplicant1) => {
          return (
            <Applicant
              key={data.created_at}
              to={`/admin/applicant/${data.application_id}`}
            >
              <TitleWrap>
                {pathname === "/admin/current" && (
                  <Title1>{data.position_title} 채용</Title1>
                )}
                <NameWrap>
                  <Name>{data.user_name}</Name>
                  {data.log ? null : (
                    <Label2>
                      <span>new</span>
                    </Label2>
                  )}
                </NameWrap>
              </TitleWrap>
              <ContentWrap>
                <Career>
                  {data.career_type.length === 0 ? "신입" : data.career_type}
                  &nbsp;
                  {data.career_date.replace("0년", "")}
                  <span>|</span> {data.created_at.substr(0, 10)}
                </Career>
                <Email>
                  {data.user_email} <span>|</span> {data.user_phoneNumber}
                </Email>
              </ContentWrap>
            </Applicant>
          );
        })}
    </>
  );
});

export default AdminMenuApplicant;
