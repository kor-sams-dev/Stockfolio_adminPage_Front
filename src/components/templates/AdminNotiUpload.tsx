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
      </Inner>
    </Box>
  );
});

export default AdminNotiUpload;
