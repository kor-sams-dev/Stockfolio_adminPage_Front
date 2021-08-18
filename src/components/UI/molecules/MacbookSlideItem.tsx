import React from "react";

import { ImgProps } from "../../../models/commonInterfaces";

function MacbookSlideItem({ imgSrc, imgAlt }: ImgProps): JSX.Element {
  return (
    <li>
      <img src={imgSrc} alt={imgAlt} />
    </li>
  );
}

export default MacbookSlideItem;
