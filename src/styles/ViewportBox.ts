import styled from "styled-components";

import { ViewportBoxProps } from "../models/landingInterfaces";
import theme from "./theme";

const ViewportBox = styled.section`
  border: 1px solid red;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: ${({ bgColor }: ViewportBoxProps) =>
    bgColor || theme.color.white};
`;

export default ViewportBox;
