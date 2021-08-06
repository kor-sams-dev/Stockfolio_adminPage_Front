import React from "react";
import styled from "styled-components";

interface Props {
  width: string;
  height: string;
}

const Box = styled.div.attrs((props: Props) => ({
  width: props.width,
  height: props.height,
}))`
  width: ${({ width }: Props) => `${width}%`};
  height: ${({ height }: Props) => `${height}%`};
`;

function SquareBg(): JSX.Element {
  return <Box />;
}

export default SquareBg;
