import styled from "styled-components";
import { observer } from "mobx-react";
import { useEffect } from "react";
import Heading2 from "../UI/atoms/texts/Heading2";
import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";
import AdminApplicantStore from "../../stores/AdminApplicantStore";

const AdminBox = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const Wrap = styled.div`
  padding: 40px 0px;
`;

const AdminCurrent = observer((): JSX.Element => {
  const { setApplicant } = AdminApplicantStore;
  const requestHeaders: HeadersInit = new Headers();

  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set(
    "Authorization",
    sessionStorage
      ?.getItem("login")
      ?.slice(0, sessionStorage.getItem("login")!.length) || "no token"
  );

  useEffect(() => {
    fetch("http://10.58.1.177:8000/applications", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicant(data.results);
      });
  }, []);

  return (
    <AdminBox>
      <Inner size="narrow">
        <Wrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            최근 지원자
          </Heading2>
        </Wrap>
        <AdminMenuApplicant />
      </Inner>
    </AdminBox>
  );
});

export default AdminCurrent;
