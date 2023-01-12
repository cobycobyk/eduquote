import styled from "styled-components";

export const PMRow = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
`;
export const PMContainer = styled.div`
  display: flex;
  padding: 2rem;
`;
export const PMImgs = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PMImgSmall = styled.img`
  width: 10rem;
  :hover {
    cursor: pointer;
  }
`;
export const PMImgMain = styled.img`
  width: 40rem;
`;
export const PMDescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;