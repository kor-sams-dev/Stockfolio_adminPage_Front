import React from "react";
import styled from "styled-components";
import {
  DataItemProps,
  InputWidthProps,
} from "../../../../models/ApplicationInterfaces";
import theme from "../../../../styles/theme";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: InputWidthProps) => `${itemWidth}%`};
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

function Textarea({
  name,
  placeholder,
  title,
  itemWidth,
}: DataItemProps): JSX.Element {
  return (
    <Box itemWidth={itemWidth}>
      <TextSection
        maxLength={2000}
        title={title}
        name={name}
        placeholder={placeholder}
      />
      <LetterLength>(0/2000자)</LetterLength>
    </Box>
  );
}

export default Textarea;
