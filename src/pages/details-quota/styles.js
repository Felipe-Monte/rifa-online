import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 100%;
    height: fit-content;
    padding: 10px 59px;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
`;
