import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 105px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN};
`