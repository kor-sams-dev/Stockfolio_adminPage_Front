import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";
import { IUserInfo } from "../../../models/AdminAccountInterface";

const AccountBtn = styled.button`
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const AccountContentName = styled.input`
  font-size: 15px;
  font-weight: bold;
  display: inline;
  background-color: white;
`;

const AccountContent = styled.input`
  font-size: 10px;
  font-weight: 400;
  display: inline;
  background-color: white;
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

    ${AccountContentName} {
      background-color: ${theme.color.greyLight1};
    }

    ${AccountContent} {
      background-color: ${theme.color.greyLight1};
    }
  }
`;

const ButtonWrap = styled.div`
  float: right;
`;

interface IAddList {
  list: IUserInfo;
}

const AdminAccountList = observer(({ list }: IAddList): JSX.Element => {
  const [textCheck, setTextCheck] = useState({ ...list });

  const { id, userName, email, password } = textCheck;

  const changeText = (e: any) => {
    const { name, value } = e.target;
    setTextCheck({ ...textCheck, [name]: value });
  };

  const [handleEditButton, setHandleEditButton] = useState(true);
  const editText = () => {
    setHandleEditButton(!handleEditButton);
  };

  return (
    <AccountWrap key={list.id} onChange={changeText}>
      <AccountContentName
        type="text"
        name="userName"
        value={textCheck.userName === "" ? list.userName : textCheck.userName}
        disabled={handleEditButton}
      />
      <AccountContent
        type="text"
        name="email"
        value={textCheck.email === "" ? list.email : textCheck.email}
        disabled={handleEditButton}
      />
      <AccountContent
        type="text"
        name="password"
        value={textCheck.password === "" ? list.password : textCheck.password}
        disabled={handleEditButton}
      />
      <ButtonWrap>
        <AccountBtn key={list.id} onClick={editText}>
          {handleEditButton ? "수정" : "확인"}
        </AccountBtn>
        <AccountBtn>삭제</AccountBtn>
      </ButtonWrap>
    </AccountWrap>
  );
});

export default AdminAccountList;
