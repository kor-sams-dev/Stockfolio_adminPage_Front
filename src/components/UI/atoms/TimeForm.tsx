import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

const TimeDate = styled.span`
  color: ${theme.color.grey2};
  font-size: 6px;
  line-height: 1.5;
`;

const TimeForm = observer((): JSX.Element => {
  const presentDate = new Date();

  return (
    <TimeDate>
      {presentDate.getFullYear()}/
      {presentDate.getMonth() <= 10
        ? `0${presentDate.getMonth() + 1}`
        : presentDate.getMonth() + 1}
      /
      {presentDate.getDate() <= 9
        ? `0${presentDate.getDate()}`
        : presentDate.getDate()}{" "}
      {presentDate.getHours() >= 12 ? "오후" : "오전"}{" "}
      {presentDate.getHours() >= 13
        ? presentDate.getHours() - 12
        : presentDate.getHours()}
      :
      {presentDate.getMinutes() <= 9
        ? `0${presentDate.getMinutes()}`
        : presentDate.getMinutes()}
    </TimeDate>
  );
});

export default TimeForm;
