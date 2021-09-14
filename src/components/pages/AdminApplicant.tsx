import styled from "styled-components";
import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
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
  display: flex;
`;

const Title = styled.div`
  color: ${theme.color.mainDeep};
  margin-left: 258px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const AdminApplicant = (): JSX.Element => {
  return (
    <AdminBox>
      <Inner size="narrow">
        <Wrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            지원자 리스트(5)
          </Heading2>
          <Title>UX/UI 디자이너 모집</Title>
        </Wrap>
        <AdminMenuApplicant />
      </Inner>
    </AdminBox>
  );
};

export default AdminApplicant;
