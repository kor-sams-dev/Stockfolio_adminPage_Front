import React from "react";
import styled, { css } from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

interface Props {
  fontLarge: string;
  fontSmall: string;
  btnWidth: string;
  filled: boolean;
}

const Button = styled.button`
  font-size: ${({ fontLarge, fontSmall }: Props) =>
    (fontLarge && "18px") || (fontSmall && "16px")};
  width: ${({ btnWidth }: Props) => `${btnWidth}px`};
  ${({ theme }) => theme.flexMixin};
  ${({ filled }: Props) =>
    (filled &&
      css`
        color: white;
      `) ||
    (!filled &&
      css`
        border: 1px solid black;
      `)}
`;

function SquareBtn({ children }: ChildrenPropsType): JSX.Element {
  return <Button type="button">{children}</Button>;
}

export default SquareBtn;
