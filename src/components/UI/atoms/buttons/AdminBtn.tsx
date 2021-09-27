import React, { useState } from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Heading4 from "../texts/Heading4";
import theme from "../../../../styles/theme";
import { INotificationItem } from "../../../../models/AdminAccountInterface";
import { DropdownStore } from "../../../../stores/AdminNotificationStore";
import { INotificationUpload } from "../../../../models/AdminNotificationInterface";

const DropdownWrap = styled.div`
  margin-right: 16px;
`;

const DropdownBtn = styled.button`
  padding: 16px 0 16px 16px;
  width: ${props => props.width}px;
  background-color: ${theme.color.greyLight1};
  color: ${props => (props.name === props.value ? theme.color.grey1 : `black`)};
  position: relative;
  align-items: center;
  text-align: left;
  border-radius: 10px;
  cursor: pointer;
`;

const DownImg = styled.img`
  position: absolute;
  color: ${theme.color.grey1};
  right: 10px;
  width: 14px;
`;

const ListWrap = styled.div`
  width: ${props => props.width}px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
`;

const DropdownList = styled.button`
  font-size: 12px;
  padding: 10px;
  margin: 6px;
  display: block;
  width: 90%;
  text-align: left;
  border-radius: 8px;

  &:hover {
    background-color: ${theme.color.greyLight2};
  }
`;

interface IAddNotiBtn {
  item: INotificationItem;
}

const AdminInput = observer(
  ({
    item,
  }: React.ButtonHTMLAttributes<HTMLButtonElement> &
    IAddNotiBtn): JSX.Element => {
    const [onOffBtn, setOnOffBtn] = useState(true);
    const handleDropdown = () => {
      setOnOffBtn(!onOffBtn);
    };

    const [dropdownTitle, setDropdownTitle] = useState(`${item.title}`);

    const selectTitle = (e: any) => {
      const { name, value } = e.target;
      setDropdownTitle(value);
      DropdownStore.setDropdown(
        name as keyof INotificationUpload,
        e.target.value
      );
    };

    return (
      <DropdownWrap>
        <Heading4 fontWeight={500} fontSize={14}>
          {item.title}
        </Heading4>
        <DropdownBtn
          width={item.itemWidth}
          name={item.title}
          value={dropdownTitle}
          onClick={handleDropdown}
        >
          {dropdownTitle}
          <DownImg src="/../../images/downArrow.png" alt="dowm img" />
          <ListWrap width={item.itemWidth} hidden={onOffBtn}>
            {item.list.map(data => {
              return (
                <DropdownList
                  key={data}
                  name={item.name}
                  onClick={selectTitle}
                  value={data}
                >
                  {data}
                </DropdownList>
              );
            })}
          </ListWrap>
        </DropdownBtn>
      </DropdownWrap>
    );
  }
);

export default AdminInput;
