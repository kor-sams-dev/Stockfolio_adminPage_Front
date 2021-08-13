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

interface AddBtnProps extends ChildrenProps {
  sort: string;
}

interface LabelProps {
  stance: "senior" | "junior";
}

interface DescProps extends TextProps {
  lineHeight?: number;
}

interface ImgProps {
  imgSrc: string;
  imgAlt: string;
}

interface IdxProps {
  idx: number;
}

interface CheckBoxProps {
  name: string;
  title: string;
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
  ChildrenProps,
  TextProps,
  SquareBtnProps,
  AddBtnProps,
  LabelProps,
  DescProps,
  ImgProps,
  IdxProps,
  CheckBoxProps,
  InputProps,
  SelectProps,
  InnerProps,
};
