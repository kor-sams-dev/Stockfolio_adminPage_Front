import { ReactChild, ReactChildren } from "react";

interface ChildrenProps {
  children: ReactChild | ReactChildren;
}

interface TextProps extends ChildrenProps {
  fontColor?: string;
  fontSize?: number;
  fontWeight?: number;
}

interface SquareBtnProps extends TextProps {
  btnWidth: number;
  isFilled: boolean;
  btnColor: string;
}

interface DescProps extends TextProps {
  lineHeight: number;
}

interface CheckBoxProps {
  name: string;
}

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

interface SelectProps {
  name: string;
}

interface InnerProps {
  size: string;
}

export type {
  SquareBtnProps,
  CheckBoxProps,
  InputProps,
  SelectProps,
  DescProps,
  InnerProps,
};
