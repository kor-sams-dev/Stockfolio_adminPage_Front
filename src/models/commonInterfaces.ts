import { ReactChild, ReactChildren } from "react";

interface ChildrenProps {
  children: ReactChild | ReactChildren;
}

interface TextProps extends ChildrenProps {
  fontColor?: string | "black";
  fontSize?: number;
  fontWeight?: number | 400;
}

interface SquareBtnProps extends TextProps {
  btnWidth: number;
  isFilled: boolean;
  btnColor: string;
}

interface LabelProps extends TextProps {
  labelColor?: string;
  labelWidth?: number;
}

interface DescProps extends TextProps {
  lineHeight?: number;
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
  TextProps,
  SquareBtnProps,
  LabelProps,
  DescProps,
  CheckBoxProps,
  InputProps,
  SelectProps,
  InnerProps,
};
