import styled from "styled-components";

import theme from "../../styles/theme";
import Inner from "../../styles/Inner";

import AdminMenuBox from "../UI/organisms/AdminMenuBox";
import AdminNotice from "../UI/organisms/AdminNotice";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";

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

const AdminMain = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <AdminMenuBox />
        <AdminNotice />
        <AdminMenuApplicant />
      </Inner>
    </Box>
  );
};

export default AdminMain;
