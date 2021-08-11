import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";

const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent;
  z-index: 1;
`;

const AlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoBox = styled.div`
  position: absolute;
  left: 50%;
  top: -20px;
  transform: translateX(-50%);
  width: 161px;
  height: 32px;
`;

const NavMenuList = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

const NavMenu = styled.li`
  margin: 0 20px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

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
