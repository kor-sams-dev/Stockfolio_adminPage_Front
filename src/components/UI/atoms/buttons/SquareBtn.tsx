import React from "react";
import styled, { css } from "styled-components";

import { SquareBtnProps } from "../../../../models/commonInterfaces";

const Button = styled.button.attrs((props: SquareBtnProps) => ({
  btnWidth: props.btnWidth,
  isFilled: props.isFilled,
  btnColor: props.btnColor,
}))`
  width: ${({ btnWidth }: SquareBtnProps) => `${btnWidth}px`};
  color: ${({ fontColor }: SquareBtnProps) => fontColor};
  font-size: ${({ fontSize }: SquareBtnProps) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: SquareBtnProps) => fontWeight};
  ${({ isFilled }: SquareBtnProps) =>
    (isFilled &&
      css`
        background: ${({ btnColor }: SquareBtnProps) => btnColor};
      `) ||
    (!isFilled &&
      css`
        border: ${({ btnColor }: SquareBtnProps) => `1px solid ${btnColor}`};
      `)}
`;

function SquareBtn({
  children,
  isFilled,
  btnWidth,
  btnColor,
  fontSize,
  fontColor,
  fontWeight,
}: SquareBtnProps): JSX.Element {
  return (
    <Button
      type="button"
      isFilled={isFilled}
      btnWidth={btnWidth}
      btnColor={btnColor}
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
    >
      {children}
    </Button>
  );
}

export default SquareBtn;

/* ${({ theme }) => theme.flexMixin}; */
