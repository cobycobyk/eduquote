import styled from "styled-components";

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
`;

export const CartTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem;
  font-size: 32px;
  font-weight: bold;
`;
export const CartTableHead = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: lightgrey;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  margin: 0.5rem 0;
`;
export const CartItemImg = styled.img`
  max-width: 5vw;
`;
export const CartTableCol1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  `;
  export const CartTableCol2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 60%;
  `;
  export const CartItemName = styled.div`
  font-size: 0.9vw;
  `;
  export const CartItemSku = styled.div`
  font-size: 0.75vw;
  `;
  export const CartTableCol3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-size: 0.8vw;
  flex-grow: 1;
  `;
  export const CartTableCol4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  font-size: 0.8vw;
  flex-grow: 1;
  `;
  export const CartTableCol5 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 5%;
  font-size: 0.8vw;
  color: red;
  cursor: pointer;
  flex-grow: 1;
`;

export const CartTotal = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CartSh3 = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 1rem;
`;
export const CartTotalContainer = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 1rem 0;
  margin-right: 1rem;
`;

export const CartCallToAction = styled.div`
  display: flex;
  justify-content: center;
`;
export const CartCallToActionButton = styled.button`
  color: black;
  border: 1px solid lightgrey;
  border-radius: 30px;
  padding: 7px 20px;
  background-color: orange;
  font-weight: bold;
  :hover {
    transparency: 0.85%;
    color: black;
    cursor: pointer;
  }
`;
export const CartTdImg = styled.td`
  min-width: 90px;
  max-width: 90px;
  vertical-align: middle;
  line-height: 1.42857143;
  text-align: center;
  color: rgba(105, 105, 115, 1);
  padding: 6px 6px 6px 0;
`;
export const CartThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;