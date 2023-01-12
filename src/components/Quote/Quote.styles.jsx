import styled from "styled-components"

export const QuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

export const QuoteTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem;
  font-size: 32px;
  font-weight: bold;
`;

export const QuoteAddContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

export const QAButton = styled.button`
  margin: 0 0.5rem;
  border: none;
  background: transparent;
  :hover {
    color: orange;
  }
`;
export const QAInput = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1rem;
  border: none;
  background-color: lightgrey;
`;
export const AddToQuoteButton = styled.button`
  margin-left: 1rem;
  border: none;
  padding: 0 0.5rem;
  border-radius: 10px;
  background-color: lightgrey;
  :hover{
    background-color: orange;
  }
`;