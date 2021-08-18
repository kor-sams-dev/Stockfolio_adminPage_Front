import styled from "styled-components";
import { InnerProps } from "../models/commonInterfaces";

const Inner = styled.div`
  width: ${({ size }: InnerProps) =>
    (size === "narrow" && "51%") || (size === "wide" && "57.5%")};
`;

export default Inner;
