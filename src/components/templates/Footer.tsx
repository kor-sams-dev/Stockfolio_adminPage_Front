import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";

import theme from "../../styles/theme";

const Box = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background: ${theme.color.bgFooter};
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  margin-left: 70px;
  width: 265px;
`;

const Item = styled.li`
  color: #ccc;
  font-size: 14px;
  line-height: 1.8;
`;

const Rights = styled(Item)`
  margin-bottom: 20px;
`;

const Footer = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <FlexBox>
          <img src="/images/Logo_Stockfolio_white.png" alt="스톡폴리오" />
          <List>
            <Rights>(주)스톡폴리오 © All Rights Reserved.</Rights>
            <Item>대표이사: 오연우, 조기영</Item>
            <Item>사업자등록번호: 229-88-01608</Item>
            <Item>주소: 서울특별시 성동구 아차산로 126 802호</Item>
            <Item>전화번호: 010-8373-3820</Item>
          </List>
        </FlexBox>
      </Inner>
    </Box>
  );
};

export default Footer;
