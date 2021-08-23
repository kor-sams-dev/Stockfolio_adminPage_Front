import React from "react";
import styled from "styled-components";

import Heading2 from "../UI/atoms/texts/Heading2";
import Heading3 from "../UI/atoms/texts/Heading3";
import ApplyInput from "../UI/atoms/inputs/ApplyInput";
import Desc from "../UI/atoms/texts/Desc";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";
import theme from "../../styles/theme";

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
  return (
    <Container>
      <ApplyFormBox>
        <HeaderBox>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            지원하기
          </Heading2>
        </HeaderBox>
        <InputBox>
          <Heading3
            fontColor={theme.color.descMedium}
            fontSize={14}
            fontWeight={700}
          >
            이메일
          </Heading3>
          <InputInfo
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
          />
        </InputBox>
        <InputBox>
          <Heading3
            fontColor={theme.color.descMedium}
            fontSize={14}
            fontWeight={700}
          >
            비밀번호
          </Heading3>
          <InputInfo
            name="password"
            type="password"
            placeholder="4자리 숫자를 입력해주세요."
          />
        </InputBox>
        <Description
          fontColor={theme.color.descMedium}
          fontSize={14}
          fontWeight={400}
        >
          *본 이메일과 비밀번호를 이용해 언제든 지원서를 수정할 수 있습니다.
        </Description>
        <ConfirmBtn
          isFilled
          btnWidth={328}
          btnColor={theme.color.main}
          fontSize={14}
          fontColor={theme.color.white}
          fontWeight={700}
        >
          지원서 작성하기
        </ConfirmBtn>
      </ApplyFormBox>
    </Container>
  );
}

export default ApplyForm;
