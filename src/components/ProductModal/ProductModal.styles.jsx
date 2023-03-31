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
  border: 1px solid lightgray;
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
  }
`;
export const PMImgMain = styled.img`
  height: 30rem;
  object-fit: contatin;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid lightgray;
`;
export const PMDescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PMH4 = styled.h4`
  font-weight: bold;
`;
export const PMH5 = styled.h5`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const PMP = styled.p`

`;