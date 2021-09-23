import styled from "styled-components";
import { useLocation, useHistory, Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import adminMainMenu from "../../../assets/data/adminMainMenu";
import theme from "../../../styles/theme";
import AdminApplicantStore from "../../../stores/AdminApplicantStore";
import { AdminRecentApplicant } from "../../../models/adminMainMenu";

const AdminNav = styled.ul`
  font-size: 18px;
  color: ${theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 16px;
  margin-top: 60px;
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

const Applicant = styled(Link)`
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

  const gotoapplicant = () => {
    history.push("/admin/applicant/:id");
  };

  return (
    <>
      {pathname === "/admin" && (
        <AdminNav>
          <NavTitle>최근 지원자</NavTitle>
          <NavButton onClick={gotodetail}>전체보기</NavButton>
        </AdminNav>
      )}
      {toJS(ApplicantList).map((data: AdminRecentApplicant) => {
        return (
          <Applicant
            key={data.created_at}
            to={`/admin/applicant/${Number(data.recruit_id)}`}
          >
            <TitleWrap>
              {pathname === "/admin/current" && (
                <Title>{data.position_title} 채용</Title>
              )}
              <NameWrap>
                <Name>{data.content.basicInfo.userName}</Name>
                {data.new ? null : (
                  <Label2>
                    <span>new</span>
                  </Label2>
                )}
              </NameWrap>
            </TitleWrap>
            <ContentWrap>
              <Career>
                4년 2개월 <span>|</span> {data.deadline}
              </Career>
              <Email>
                {data.content.basicInfo.email} <span>|</span>{" "}
                {data.content.basicInfo.phoneNumber}
              </Email>
            </ContentWrap>
          </Applicant>
        );
      })}
    </>
  );
});

export default AdminMenuApplicant;
