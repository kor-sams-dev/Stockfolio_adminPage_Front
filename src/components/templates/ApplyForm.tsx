import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { SignIn } from "../../config";

import Heading2 from "../UI/atoms/texts/Heading2";
import Heading3 from "../UI/atoms/texts/Heading3";
import ApplyInput from "../UI/atoms/inputs/ApplyInput";
import Desc from "../UI/atoms/texts/Desc";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";
import theme from "../../styles/theme";

import applyFormData from "../../assets/data/applyFormData";
import { IDProp } from "../../models/applyInterfaces";

import RootStore from "../../stores/RootStore";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ApplyFormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 110px 10px;
  width: 420px;
`;

const HeaderBox = styled.div`
  margin-bottom: 50px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
`;

const InputInfo = styled(ApplyInput)`
  margin-top: 8px;
  padding-left: 16px;
  width: 328px;
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

const Description = styled(Desc)`
  margin: 60px 0 40px 0;
`;

const ConfirmBtn = styled(SquareBtn)`
  height: 54px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function ApplyForm(): JSX.Element {
  const params: IDProp = useParams();
  const history = useHistory();
  const location = useLocation();
  const { HandleToken } = RootStore();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const GoToResume = () => {
    return location.pathname === `/recruit/apply/${params.id}/register`
      ? history.push(`/recruit/apply/${params.id}/resume?apply=register`)
      : history.push(`/recruit/apply/${params.id}/resume?apply=modify`);
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;

    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const fetchLogin = () => {
    return fetch(SignIn, {
      method: "POST",
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
        recruit_id: params.id,
      }),
    })
      .then(res => res.json())
      .then(data => HandleToken.setUserToken(data));
  };

  const checkValidation = () => {
    const EMAIL_VALID_REGEX =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const PW_VALID_REGEX =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@\\[＼\]^_`{|}~\\])[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@\\[＼\]^_`{|}~\\]{8,32}$/;

    const emailValid = EMAIL_VALID_REGEX.test(userInput.email);
    const pwValid = PW_VALID_REGEX.test(userInput.password);

    return emailValid && pwValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = checkValidation();

    if (isValid) {
      fetchLogin();
      setUserInput({ email: "", password: "" });
      GoToResume();
    } else {
      alert("작성하신 내용을 확인해주세요");
    }
  };

  return (
    <Container>
      <ApplyFormBox>
        <HeaderBox>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            {location.pathname === `/recruit/apply/${params.id}/register`
              ? "지원하기"
              : "수정하기"}
          </Heading2>
        </HeaderBox>
        {applyFormData.map(data => (
          <InputBox key={data.id}>
            <Heading3
              fontColor={theme.color.descMedium}
              fontSize={14}
              fontWeight={700}
            >
              {data.title}
            </Heading3>
            <InputInfo
              name={data.name}
              type={data.type}
              placeholder={data.placeholder}
              autoComplete="off"
              onChange={handleInputValue}
            />
          </InputBox>
        ))}
        <Description
          fontColor={theme.color.descMedium}
          fontSize={14}
          fontWeight={400}
        >
          *본 이메일과 비밀번호를 이용해 언제든 지원서를 수정할 수 있습니다.
        </Description>
        <ConfirmBtn
          type="submit"
          isFilled
          btnWidth={328}
          btnColor={theme.color.main}
          fontSize={14}
          fontColor={theme.color.white}
          fontWeight={700}
          onClick={handleSubmit}
        >
          {location.pathname === `/recruit/apply/${params.id}/register`
            ? "지원서 작성하기"
            : "지원서 수정하기"}
        </ConfirmBtn>
      </ApplyFormBox>
    </Container>
  );
}

export default ApplyForm;
