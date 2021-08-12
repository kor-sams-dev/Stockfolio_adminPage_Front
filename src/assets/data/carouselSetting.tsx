import ArrowBtn from "../../components/UI/atoms/buttons/ArrowBtn";
import RootStore from "../../stores/RootStore";

const { SlideStore } = RootStore();

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerPadding: "0px",
  prevArrow: <ArrowBtn direction="prev" />,
  nextArrow: <ArrowBtn direction="next" />,
  beforeChange: (_current: any, next: any) => {
    SlideStore.slideSpot = next;
  },
};

export default settings;
