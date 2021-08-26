import React from "react";
import styled from "styled-components";

import { LabelProps } from "../../../../models/commonInterfaces";
import theme from "../../../../styles/theme";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  width: 40px;
  background: ${({ stance }: LabelProps) =>
    (stance === "신입" && theme.color.blueLight) ||
    (stance === "경력" && theme.color.lilac)};
  /* (stance === "junior" && theme.color.blueLight) ||
    (stance === "senior" && theme.color.lilac)}; */
  border-radius: 12px;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.color.white};
`;

function Label({ stance }: LabelProps): JSX.Element {
  return (
    <Box stance={stance}>
      <Text>
        {(stance === "신입" && "신입") || (stance === "경력" && "경력")}
        {/* {(stance === "junior" && "신입") || (stance === "senior" && "경력")} */}
      </Text>
    </Box>
  );
}

export default Label;
