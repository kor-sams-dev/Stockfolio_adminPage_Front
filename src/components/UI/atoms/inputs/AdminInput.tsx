import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../../styles/theme";

import { IAccountItem } from "../../../../models/AdminAccountInterface";
import { selectNotificationData } from "../../../../stores/AdminNotificationStore";

import Heading4 from "../texts/Heading4";

const InputWrap = styled.div`
  margin-top: 60px;
  margin-left: 10px;
`;

const InputForm = styled.input`
  background-color: ${theme.color.greyLight1};
  padding: 20px 0 20px 20px;
  border-radius: 8px;
  width: ${props => props.width}px;
`;

interface IAddAccount {
  item: IAccountItem;
}

const AdminInput = observer(
  ({
    item,
    onChange,
  }: React.InputHTMLAttributes<HTMLInputElement> &
    IAddAccount): JSX.Element => {
    return (
      <InputWrap>
        <Heading4 fontWeight={500} fontSize={14}>
          {item.title}
        </Heading4>
        <InputForm
          name={item.name}
          placeholder={item.placeholder}
          width={item.itemWidth}
          onChange={onChange}
          type="text"
          value={selectNotificationData.position_title}
        />
      </InputWrap>
    );
  }
);

export default AdminInput;
