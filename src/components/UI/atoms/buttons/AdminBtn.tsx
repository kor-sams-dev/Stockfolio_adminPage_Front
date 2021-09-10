import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Heading4 from "../texts/Heading4";
import theme from "../../../../styles/theme";
import { INotificationItem } from "../../../../models/AdminAccountInterface";

const DropdownWrap = styled.div`
  margin-right: 16px;
`;

const DropdownBtn = styled.button`
  padding: 16px 0 16px 16px;
  width: ${props => props.width}px;
  background-color: ${theme.color.greyLight1};
  color: ${theme.color.grey1};
  position: relative;
  align-items: center;
  text-align: left;
  border-radius: 10px;
`;

const DownImg = styled.img`
  position: absolute;
  color: ${theme.color.grey1};
  right: 10px;
  width: 14px;
`;

// const DropdownList = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 500px;
//   border: 1px solid black;
//   padding: 16px 0 0 16px;
//   background-color: white;
//   visibility: visible;
// `;

interface IAddNotiBtn {
  item: INotificationItem;
}

const AdminInput = observer(
  ({
    item,
  }: React.ButtonHTMLAttributes<HTMLButtonElement> &
    IAddNotiBtn): JSX.Element => {
    return (
      <DropdownWrap>
        <Heading4 fontWeight={500} fontSize={14}>
          {item.title}
        </Heading4>
        <DropdownBtn width={item.itemWidth}>
          {item.title}
          <DownImg src="/../../images/downArrow.png" alt="dowm img" />
          {/* <DropdownList>김명성</DropdownList> */}
        </DropdownBtn>
      </DropdownWrap>
    );
  }
);

export default AdminInput;
