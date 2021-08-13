import React from "react";
import styled from "styled-components";
import { InputProps } from "../../../../models/commonInterfaces";
import theme from "../../../../styles/theme";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: ${theme.color.descMedium};
  font-weight: 700;
`;

const InputSection = styled.input`
  height: 54px;
  background: ${theme.color.lilac};
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};

  &::placeholder {
    color: ${theme.color.grey1};
  }
`;

const Input = ({ type, placeholder, name }: InputProps): JSX.Element => {
  return (
    <Box>
      <Title>{name}</Title>
      <InputSection
        type={`${type}`}
        placeholder={`${placeholder}`}
        name={`${name}`}
      />
    </Box>
  );
};

export default Input;
