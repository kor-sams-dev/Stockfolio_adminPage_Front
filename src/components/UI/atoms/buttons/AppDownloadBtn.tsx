import React from "react";
import styled from "styled-components";

const Img = styled.img`
  position: fixed;
  top: 170px;
  right: 120px;
`;

function AppDownloadBtn(): JSX.Element {
  return <Img src="./images/appDownload.png" alt="download application" />;
}

export default AppDownloadBtn;
