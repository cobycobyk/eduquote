import styled from "styled-components";

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: lightgrey;
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
  justify-content: space-between;
`;
export const CartTableCol1 = styled.div`
`;
export const CartTableCol2 = styled.div`
`;
export const CartTableCol3 = styled.div`
`;
export const CartTableCol4 = styled.div`
`;

export const CartTotal = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const CartSh3 = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-right: 1rem;
`;
export const CartTotalContainer = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 1rem 0;
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
  background-color: white;
  :hover {
    background-color: orange;
    border: 1px solid orange;
    color: black;
    cursor: pointer;
  }
`;