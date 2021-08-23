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
  className?: string;
}

interface LabelProps {
  stance: "senior" | "junior";
}

interface QuantityLabelProps {
  quantity?: number | 0;
  className?: string;
}

interface DescProps extends TextProps {
  lineHeight?: number;
  className?: string;
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
}

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

interface ApplyInputProps {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
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
  QuantityLabelProps,
  DescProps,
  ImgProps,
  IdxProps,
  CheckBoxProps,
  InputProps,
  ApplyInputProps,
  SelectProps,
  InnerProps,
};
