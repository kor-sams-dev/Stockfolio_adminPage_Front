import styled from "styled-components";
import theme from "../../styles/theme";
import Heading3 from "../UI/atoms/texts/Heading3";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Logobox = styled.div`
  margin-bottom: 100px;
  img {
    width: 163px;
    height: 40px;
  }
`;

const ConfirmBtn = styled(SquareBtn)`
  height: 54px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 100px;
`;

const InputInfo = styled.input`
  margin-top: 5px;
  padding-left: 16px;
  width: 312px;
  height: 54px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.color.greyLight1};

  ::placeholder {
    color: ${theme.color.grey1};
    font-size: 14px;
    font-weight: 400;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Heading = styled.div`
  color: ${theme.color.black};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 64px;
`;

const InputBox1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminLogin = () => {
  return (
    <Container>
      <Logobox>
        <img alt="Stockfolio" src="/images/Logo_Stockfolio2.png" />
      </Logobox>
      <InputBox>
        <Heading>관리자페이지</Heading>
        <Heading3 fontColor={theme.color.grey2} fontSize={14} fontWeight={700}>
          아이디
        </Heading3>
        <InputInfo type="email" placeholder="아이디를 입력해주세요" />
      </InputBox>
      <InputBox1>
        <Heading3 fontColor={theme.color.grey2} fontSize={14} fontWeight={700}>
          비밀번호
        </Heading3>
        <InputInfo type="password" placeholder="아이디를 입력해주세요" />
      </InputBox1>
      <ConfirmBtn
        type="submit"
        isFilled
        btnWidth={312}
        btnColor={theme.color.main}
        fontSize={14}
        fontColor={theme.color.white}
        fontWeight={700}
      >
        로그인
      </ConfirmBtn>
    </Container>
  );
};

export default AdminLogin;
