import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import RootStore from "../../../stores/RootStore";

import SquareBtn from "../atoms/buttons/SquareBtn";
import theme from "../../../styles/theme";

const { StyledAlertStore } = RootStore();

const Deemer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 99999;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 60px 30px;
  background: ${theme.color.greyLight1};
  border-radius: 8px;
  z-index: 9;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
`;

const Text = styled.span`
  margin-bottom: 40px;
`;

const StyledAlert = (): JSX.Element => {
  const { alertType, setIsAlertOn } = StyledAlertStore;
  const history = useHistory();

  const handleClickBtn = () => {
    setIsAlertOn();
    if (alertType === "applySuccess") {
      history.push("/");
    }
  };

  return (
    <Deemer>
      <Box>
        <Text>
          {(alertType === "applySuccess" && "지원이 완료되었습니다") ||
            (alertType === "applyReject" && "오류가 발생했습니다") ||
            (alertType === "requiredNotFilled" &&
              "필수 항목을 모두 입력해주세요")}
        </Text>
        <SquareBtn
          isFilled
          btnWidth={150}
          btnColor={theme.color.main}
          fontColor={theme.color.white}
          fontWeight={700}
          onClick={handleClickBtn}
        >
          확인
        </SquareBtn>
      </Box>
    </Deemer>
  );
};

export default StyledAlert;
