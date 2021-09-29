import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import AdminDataForm from "../../assets/data/adminAccountForm";

import { IAccountItem } from "../../models/AdminAccountInterface";
import { Account } from "../../config";
import requestHeaders from "../../utils/getToken";

import Heading2 from "../UI/atoms/texts/Heading2";
import AdminInput from "../UI/atoms/inputs/AdminInput";
import AdminAccountList from "../UI/organisms/AdminAccountList";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 110px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: ${theme.color.white};
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const AddAccountBtn = styled.button`
  position: relative;
  bottom: 0;
  right: 0;
  padding: 16px 55px;
  margin-top: 90px;
  margin-left: 10px;
  background-color: ${theme.color.mainDeep};
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

const AdminWrap = styled.section`
  margin-top: 60px;
  padding-left: 100px;
  padding-right: 55px;
`;

const Sort = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px auto;
  padding-left: 30px;
  width: 100%;
`;

const SortTitle = styled.span`
  color: ${theme.color.grey2};
  font-size: 10px;
`;

const AdminAccount = observer((): JSX.Element => {
  const [accountInfo, setAccountInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = accountInfo;

  const writeAdminInfo = (e: any) => {
    const { name, value } = e.target;
    setAccountInfo(prev => ({ ...prev, [name]: value }));
  };

  const AddAcount = () => {
    if (username.length > 0 && email.length > 0 && password.length > 0) {
      fetch(`${Account}`, {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(accountInfo),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === "SUCCESS") {
            setAccountInfo({ username: "", email: "", password: "" });
          }
        });
    } else {
      alert("빈칸 없이 작성해주세요");
    }
  };

  const [accountData, setAccountData] = useState<IAccountItem[]>([]);

  useEffect(() => {
    fetch(`${Account}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setAccountData(data.result);
      });
  }, [accountInfo]);

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
          <AddAccountBtn onClick={AddAcount}>추가</AddAccountBtn>
        </InputWrap>
        <AdminWrap>
          <Sort>
            {AdminDataForm.accountInput.item.map(text => {
              return <SortTitle key={text.id}>{text.title}</SortTitle>;
            })}
          </Sort>
          {accountData?.map(list => {
            return <AdminAccountList key={list.id} list={list} />;
          })}
        </AdminWrap>
      </Inner>
    </Box>
  );
});

export default AdminAccount;
