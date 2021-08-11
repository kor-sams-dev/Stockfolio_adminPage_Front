import styled from "styled-components";
import { InnerProps } from "../models/commonInterfaces";

const Inner = styled.div`
  width: ${({ size }: InnerProps) =>
    (size === "narrow" && "45%") || (size === "wide" && "60%")};
`;

export default Inner;
