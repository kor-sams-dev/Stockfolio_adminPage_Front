import React from "react";
import styled from "styled-components";

const Img = styled.img`
  position: fixed;
  top: 205px;
  right: 110px;
  cursor: pointer;
`;

function AppDownloadBtn(): JSX.Element {
  return <Img src="./images/appDownload.png" alt="download application" />;
}

export default AppDownloadBtn;
