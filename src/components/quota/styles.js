import styled from "styled-components";

export const Container = styled.button`
  width: 70px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};

  border-radius: 8px;
  border: none;

  cursor: pointer;
`;
