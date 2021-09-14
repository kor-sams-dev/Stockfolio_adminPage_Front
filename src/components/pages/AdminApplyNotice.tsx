import styled from "styled-components";

import theme from "../../styles/theme";
import Heading2 from "../UI/atoms/texts/Heading2";
import Inner from "../../styles/Inner";
import ApplyNavBar from "../UI/organisms/ApplyNavBar";

import AdminNotice from "../UI/organisms/AdminNotice";

const AdminBox = styled.section`
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

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdminApplyNotice = (): JSX.Element => {
  return (
    <AdminBox>
      <Inner size="narrow">
        <NavWrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            채용공고
          </Heading2>
          <ApplyNavBar />
        </NavWrap>
        <AdminNotice />
      </Inner>
    </AdminBox>
  );
};

export default AdminApplyNotice;
