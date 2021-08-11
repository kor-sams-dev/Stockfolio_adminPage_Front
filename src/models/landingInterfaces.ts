import { ImgProps } from "./commonInterfaces";

interface ViewportBoxProps {
  bgColor?: string | "white";
}

interface IntroduceProps {
  title: string;
  desc: string;
  idx: number;
}

interface ArrowBtnProps {
  direction: string;
  onClick?: () => void;
}

interface HistoryProps {
  title: string;
  date: string;
  desc: string;
  itemId: string;
  isEven: boolean;
  idx: number;
}

interface ProcessProps extends ImgProps {
  itemId: string;
  desc: string;
}

export type {
  ViewportBoxProps,
  IntroduceProps,
  ArrowBtnProps,
  HistoryProps,
  ProcessProps,
};
