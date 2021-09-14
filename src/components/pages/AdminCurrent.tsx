import styled from "styled-components";
import Heading2 from "../UI/atoms/texts/Heading2";
import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";

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

const Wrap = styled.div`
  padding: 40px 0px;
`;
const AdminCurrent = (): JSX.Element => {
  return (
    <AdminBox>
      <Inner size="narrow">
        <Wrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            최근 지원자
          </Heading2>
        </Wrap>
        <AdminMenuApplicant />
      </Inner>
    </AdminBox>
  );
};

export default AdminCurrent;
