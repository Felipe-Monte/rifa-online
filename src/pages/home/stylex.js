import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    height: fit-content;
    padding: 20px 59px;

    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
