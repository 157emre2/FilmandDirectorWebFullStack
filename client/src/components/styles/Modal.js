import styled from "styled-components";

export const ModalTitle = styled.h1`
  font-size: 23px;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};
  margin-top: 40px;
`;