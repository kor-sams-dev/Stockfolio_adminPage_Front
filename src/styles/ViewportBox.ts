import styled from "styled-components";

import { ViewportBoxProps } from "../models/landingInterfaces";

const ViewportBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: ${({ bgColor }: ViewportBoxProps) => bgColor};
`;

export default ViewportBox;
