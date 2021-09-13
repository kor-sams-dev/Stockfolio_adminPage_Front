import styled from "styled-components";
import theme from "../../../styles/theme";
import adminMainMenu from "../../../assets/data/adminMainMenu";
import { AdminMenu } from "../../../models/adminMainMenu";

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

const AdminMenuBox = (): JSX.Element => {
  return (
    <Admin>
      {adminMainMenu.data.menu.map((data: AdminMenu) => {
        return (
          <>
            <AdminBox key={Object.keys(adminMainMenu.data.menu)[0][0]}>
              <StringSpan>오늘의 지원자</StringSpan>
              <NumberSpan>{data.number}</NumberSpan>
            </AdminBox>
            <AdminBox key={Object.keys(adminMainMenu.data.menu)[0][1]}>
              <StringSpan>진행중인 공고</StringSpan>
              <NumberSpan>{data.Id}</NumberSpan>
            </AdminBox>
            <AdminBox key={Object.keys(adminMainMenu.data.menu)[0][2]}>
              <StringSpan>새로 등록된 공고</StringSpan>
              <NumberSpan>{data.label}</NumberSpan>
            </AdminBox>
            <AdminBox key={Object.keys(adminMainMenu.data.menu)[0][3]}>
              <StringSpan>곧 마감될 공고</StringSpan>
              <NumberSpan>{data.context}</NumberSpan>
            </AdminBox>
          </>
        );
      })}
    </Admin>
  );
};

export default AdminMenuBox;
