import { ImgProps } from "./commonInterfaces";

interface IntroduceProps {
  title: string;
  desc: string;
}

interface ArrowBtnProps {
  direction: string;
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

export type { IntroduceProps, ArrowBtnProps, HistoryProps, ProcessProps };
