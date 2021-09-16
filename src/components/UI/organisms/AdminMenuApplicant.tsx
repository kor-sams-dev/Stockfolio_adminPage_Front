import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import adminMainMenu from "../../../assets/data/adminMainMenu";
import theme from "../../../styles/theme";

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

const AdminMenuApplicant = (): JSX.Element => {
  const { pathname } = useLocation();
  const history = useHistory();

  const gotodetail = () => {
    history.push("/admincurrent");
  };
  return (
    <>
      {pathname === "/admin" && (
        <AdminNav>
          <NavTitle>최근 지원자</NavTitle>
          <NavButton onClick={gotodetail}>전체보기</NavButton>
        </AdminNav>
      )}
      {adminMainMenu.data.notice.map(data => {
        return (
          <Applicant key={data.idx}>
            <TitleWrap>
              {pathname === "/admincurrent" && (
                <Title>{data.developer} 채용</Title>
              )}
              <Name>{data.name}</Name>
              {data.label ? (
                <Label2>
                  <span>new</span>
                </Label2>
              ) : null}
            </TitleWrap>
            <ContentWrap>
              <Career>
                {data.career} <span>|</span> {data.date}
              </Career>
              <Email>
                {data.email} <span>|</span> {data.number}
              </Email>
            </ContentWrap>
          </Applicant>
        );
      })}
    </>
  );
};

export default AdminMenuApplicant;
