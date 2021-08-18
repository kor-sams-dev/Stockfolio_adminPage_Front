import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";

const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: ${theme.color.white};
  z-index: 99999;
`;

const AlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 161px;
  height: 32px;
`;

const NavMenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavMenu = styled.li`
  color: ${theme.color.black};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  & + li {
    margin-left: 57px;
  }

  &:hover {
    font-weight: 900;
  }
`;

function Nav(): JSX.Element {
  return (
    <NavHeader>
      <Inner size="wide">
        <AlignBox>
          <LogoBox>
            <img alt="Stockfolio" src="./images/Logo_Stockfolio.png" />
          </LogoBox>
          <NavMenuList>
            <NavMenu>회사 소개</NavMenu>
            <NavMenu>채용 공고</NavMenu>
          </NavMenuList>
        </AlignBox>
      </Inner>
    </NavHeader>
  );
}

export default Nav;
