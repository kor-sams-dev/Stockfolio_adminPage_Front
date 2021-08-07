import styled from "styled-components";

interface Props {
  size: string;
}

const Inner = styled.div`
  background: lightblue;
  width: ${({ size }: Props) =>
    (size === "narrow" && "45%") || (size === "wide" && "62%")};
`;

export default Inner;
