import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import AdminInput from "../UI/atoms/inputs/AdminInput";
import AdminBtn from "../UI/atoms/buttons/AdminBtn";

import theme from "../../styles/theme";
import AdminDataForm from "../../assets/data/adminAccountForm";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: ${theme.color.white};
  padding-top: 100px;
`;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const DropdownSection = styled.section`
  margin-top: 24px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
`;

const WebEditor = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  margin: 16px 0 16px 16px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitBtn = styled.button`
  margin: 40px 0;
  padding: 16px;
  background-color: ${theme.color.mainDeep};
  color: white;
  width: 312px;
  border-radius: 10px;
  cursor: pointer;
`;

const AdminNotiUpload = observer((): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <HeaderWrap>
          <Heading2 fontWeight={700} fontSize={24}>
            새로운 공고 올리기
          </Heading2>
        </HeaderWrap>
        <AdminInput item={AdminDataForm.notificationInput.item[0]} />
        <DropdownSection>
          {AdminDataForm.NotificationUploadBtn.data.map(item => {
            return <AdminBtn item={item} key={item.id} />;
          })}
        </DropdownSection>
        <WebEditor>에디터 위치</WebEditor>
        <BtnWrap>
          <SubmitBtn>올리기</SubmitBtn>
        </BtnWrap>
      </Inner>
    </Box>
  );
});

export default AdminNotiUpload;
