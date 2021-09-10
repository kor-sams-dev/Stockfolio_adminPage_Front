import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import AdminInput from "../UI/atoms/inputs/AdminInput";

import theme from "../../styles/theme";
import AdminDataForm from "../../assets/data/adminAccountForm";
import { IAccountItem } from "../../models/AdminAccountInterface";

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

const InputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const AddAccountBtn = styled.button`
  background-color: ${theme.color.mainDeep};
  position: relative;
  bottom: 0;
  right: 0;
  padding: 16px 55px;
  border-radius: 8px;
  color: white;
  margin-top: 90px;
  margin-left: 10px;
  cursor: pointer;
`;

const AdminWrap = styled.section`
  margin-top: 60px;
  padding-left: 100px;
  padding-right: 55px;
`;

const Sort = styled.div`
  width: 100%;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 200px 200px 200px auto;
`;

const SortTitle = styled.span`
  color: ${theme.color.grey2};
  font-size: 10px;
`;

const AccountBtn = styled.button`
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px;
  font-size: 15px;
`;

const AccountWrap = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px auto;
  width: 100%;
  padding: 9px 0 9px 30px;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;

  &:hover {
    background-color: ${theme.color.greyLight1};

    ${AccountBtn} {
      background-color: ${theme.color.mainDeep};
      color: white;
    }
  }
`;

const AccountContentName = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const AccountContent = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

const ButtonWrap = styled.div`
  float: right;
`;

const AdminAccount = observer((): JSX.Element => {
  const [accountInfo, setAccountInfo] = useState({
    title: "",
    id: "",
    password: "",
  });

  const writeAdminInfo = (e: any) => {
    const { name, value } = e.target;
    setAccountInfo(prev => ({ ...prev, [name]: value }));
  };

  // const [accountData, setAccountData] = useState([]);

  // const requestHeaders: HeadersInit = new Headers();
  // requestHeaders.set("Content-Type", "application/json");
  // requestHeaders.set(
  //   "Authorization",
  //   localStorage
  //     ?.getItem("access_token")
  //     ?.slice(1, localStorage.getItem("access_token")!.length - 1) || "no token"
  // );

  // useEffect(() => {
  //   fetch("http://192.168.35.189:8000/users/admins", {
  //     method: "GET",
  //     headers: requestHeaders,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setAccountData(data.result);
  //     });
  // }, []);

  return (
    <Box>
      <Inner size="wide">
        <Heading2 fontWeight={700} fontSize={24}>
          어드민 계정 관리
        </Heading2>
        <InputWrap>
          {AdminDataForm.accountInput.item.map(item => {
            return (
              <AdminInput item={item} key={item.id} onChange={writeAdminInfo} />
            );
          })}
          <AddAccountBtn>추가</AddAccountBtn>
        </InputWrap>
        <AdminWrap>
          <Sort>
            {AdminDataForm.accountInput.item.map(text => {
              return <SortTitle key={text.id}>{text.title}</SortTitle>;
            })}
          </Sort>
          {AdminDataForm.accountInput.account.map(list => {
            return (
              <AccountWrap key={list.id}>
                <AccountContentName>{list.name}</AccountContentName>
                <AccountContent>{list.email}</AccountContent>
                <AccountContent>{list.password}</AccountContent>
                <ButtonWrap>
                  <AccountBtn>수정</AccountBtn>
                  <AccountBtn>삭제</AccountBtn>
                </ButtonWrap>
              </AccountWrap>
            );
          })}
        </AdminWrap>
      </Inner>
    </Box>
  );
});

export default AdminAccount;
