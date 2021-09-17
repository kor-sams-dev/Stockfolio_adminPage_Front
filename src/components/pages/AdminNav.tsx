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
  /* color: ${theme.color.black}; */
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 900 : 400)};
  color: ${props =>
    props.isActive ? `${theme.color.black}` : `${theme.color.grey1}`};
`;

const NavText = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 15px;
`;

const NavName = styled.span`
  font-size: 14px;
  margin-right: 39px;
  color: ${theme.color.main};
`;

const NavLogin = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

function AdminNav(): JSX.Element {
  const { pathname } = useLocation();
  const history = useHistory();
  const GoToMain = () => history.push("/admin");
  const GotoLogin = () => {
    history.push("/login");
  };
  const Logout = () => {
    sessionStorage.removeItem("TOKEN");
    GotoLogin();
  };

  const username = sessionStorage.getItem("username");
  return (
    <NavHeader>
      <Inner size="wide">
        <AlignBox>
          <LogoWrap>
            <LogoBox onClick={GoToMain}>
              <img alt="Stockfolio" src="/images/Logo_Stockfolio2.png" />
            </LogoBox>

            <NavText>관리자 페이지</NavText>
          </LogoWrap>
          <NavMenuList>
            <NavMenu to="/admin" isActive={pathname === "/admin"}>
              홈
            </NavMenu>
            <NavMenu
              to="/adminapplynotice"
              isActive={
                pathname === "/admin/apply" ||
                pathname === "/admincurrent" ||
                pathname === "/adminapplynotice"
              }
            >
              채용 공고
            </NavMenu>
            <NavMenu
              to="/admin/notification"
              isActive={
                pathname === "/admin/notification" ||
                pathname === "/admin/notification/write"
              }
            >
              공고 관리
            </NavMenu>
            <NavMenu
              to="/admin/account"
              isActive={pathname === "/admin/account"}
            >
              어드민
            </NavMenu>
          </NavMenuList>
          <NavMenuList>
            <NavName>{username}님🦄</NavName>
            {sessionStorage.getItem("TOKEN") ? (
              <NavLogin onClick={Logout}>로그아웃</NavLogin>
            ) : (
              <NavLogin onClick={GotoLogin}>로그인</NavLogin>
            )}
          </NavMenuList>
        </AlignBox>
      </Inner>
    </NavHeader>
  );
}

export default AdminNav;
