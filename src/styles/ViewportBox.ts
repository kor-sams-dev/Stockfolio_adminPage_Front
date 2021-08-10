import styled from "styled-components";

const ViewportBox = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flex("center", "flex-start")};
  width: 100%;
  height: 100vh;
  padding-top: 115px;
`;

export default ViewportBox;
