import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 100%;
    height: calc(100% - 105px);
    padding: 10px 59px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    .container-quota {
      width: 100%;
      height: fit-content;

      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;
