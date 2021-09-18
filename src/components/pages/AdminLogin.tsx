import React, { useState } from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Heading3 from "../UI/atoms/texts/Heading3";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";
import { SignIn } from "../../config";

import theme from "../../styles/theme";

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

const AdminLogin = observer((): JSX.Element => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const GoToMain = () => {
    history.push("/admin");
  };

  const fetchLogin = () => {
    return fetch(SignIn, {
      method: "POST",
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
        recruit_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          sessionStorage.setItem("TOKEN", data.access_token);
          sessionStorage.setItem("username", data.user_name);
          GoToMain();
        } else {
          alert(
            "아이디와 비밀번호를 확인해주세요!\n기타사항은 관리자에게 문의하세요"
          );
        }
      });
  };

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
        <InputInfo
          name="email"
          type="email"
          placeholder="아이디를 입력해주세요"
          onChange={handleInputValue}
        />
      </InputBox>
      <InputBox1>
        <Heading3 fontColor={theme.color.grey2} fontSize={14} fontWeight={700}>
          비밀번호
        </Heading3>
        <InputInfo
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputValue}
        />
      </InputBox1>
      <ConfirmBtn
        type="submit"
        isFilled
        btnWidth={312}
        btnColor={theme.color.main}
        fontSize={14}
        fontColor={theme.color.white}
        fontWeight={700}
        onClick={fetchLogin}
      >
        로그인
      </ConfirmBtn>
    </Container>
  );
});

export default AdminLogin;
