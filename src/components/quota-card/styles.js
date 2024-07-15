import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 400px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: 2px solid ${({theme}) => theme.COLORS.GREEN};
  border-radius: 8px;

  > h2 {
    width: 100%;
    text-align: start;
    padding: 0px 2px;
  }
`;
export const BannerImage = styled.div`
  width: 100%;
  height: 180px;

  border-radius: 8px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 8px;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 149px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-text{
    height: 200px;
    padding: 0px 2px;
  }

  .container-button{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    width: 100%;

    > button {
      width: 50%;
      padding: 8px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      background-color: ${({theme}) => theme.COLORS.RED};
    }
  }

  span#price{
    display: block;
    width: 50%;

    font-weight: bold;
    font-size: 20px;

    padding: 10px;

    text-align: center;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GREEN};
  }
`;
