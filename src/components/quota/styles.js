import styled from "styled-components";

export const Container = styled.button`
  width: 100px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};

  border-radius: 8px;
  border: none;

  cursor: pointer;
`;
