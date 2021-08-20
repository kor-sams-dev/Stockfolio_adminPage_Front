import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { IItemProps } from "../../../../models/ApplicationInterfaces";

import RootStore from "../../../../stores/RootStore";
import theme from "../../../../styles/theme";

const { ApplicationStore } = RootStore();

interface StyleProps {
  itemWidth?: number;
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: StyleProps) => `${itemWidth}%`};
`;

const TextSection = styled.textarea`
  margin-top: 6px;
  padding: 16px;
  height: 206px;
  background: ${theme.color.lilacLight};
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};

  &::placeholder {
    color: ${theme.color.grey1};
  }
`;

const LetterLength = styled.span`
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-size: 14px;
  color: ${theme.color.grey2};
`;

interface IAddProps {
  item: IItemProps;
}

const Textarea = observer(
  ({
    item,
    onChange,
  }: React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    IAddProps): JSX.Element => {
    return (
      <Box itemWidth={item.itemWidth}>
        <TextSection
          maxLength={2100}
          title={item.title}
          name={item.name}
          placeholder={item.placeholder}
          onChange={onChange}
        />
        <LetterLength>
          {`(${
            ApplicationStore.introduction.aboutMe
              ? ApplicationStore.introduction.aboutMe.length
              : 0
          }/2000자)`}
        </LetterLength>
      </Box>
    );
  }
);

export default Textarea;
