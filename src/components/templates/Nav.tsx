import React from "react";
import styled from "styled-components";
import {
  Link as ReactRouterDomLink,
  useHistory,
  useLocation,
} from "react-router-dom";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";

interface ClickProps {
  isActive: boolean;
  children: string;
  to: string;
}

const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  /* background-color: ${theme.color.white}; */
  backdrop-filter: blur(5px);
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
  cursor: pointer;
`;

const NavMenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Link = ({ isActive, children, ...props }: ClickProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const NavMenu = styled(Link)`
  margin: 0 30px;
  color: ${theme.color.black};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 900 : 400)};
`;

function Nav(): JSX.Element {
  const { pathname } = useLocation();
  const history = useHistory();
  const GoToMain = () => history.push("/");

  return (
    <NavHeader>
      <Inner size="wide">
        <AlignBox>
          <LogoBox onClick={GoToMain}>
            <img alt="Stockfolio" src="/images/Logo_Stockfolio2.png" />
          </LogoBox>
          <NavMenuList>
            <NavMenu to="/" isActive={pathname === "/"}>
              회사 소개
            </NavMenu>
            <NavMenu to="/recruit" isActive={pathname === "/recruit"}>
              채용 공고
            </NavMenu>
          </NavMenuList>
        </AlignBox>
      </Inner>
    </NavHeader>
  );
}

export default Nav;
