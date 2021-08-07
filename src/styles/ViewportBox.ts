import styled from "styled-components";

const ViewportBox = styled.div`
  border: 1px solid red;
  position: relative;
  ${({ theme }) => theme.flexMixin("center", "flex-start")};
  width: 100%;
  height: 100vh;
  padding-top: 80px;
`;

export default ViewportBox;
