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
export const QuoteTitleDark = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem;
  font-size: 32px;
  font-weight: bold;
  color: var(--sidebar-dark-menu-item-color);
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
export const QAButtonDark = styled.button`
  margin: 0 0.5rem;
  border: none;
  background: transparent;
  color: var(--table-color);
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
  background-color: transparent;
  color: var(--table-color);
  :hover {
    cursor: pointer;
  }
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

export const QuoteFilterBar = styled.div`
  display: flex;
  height: 3rem;
  background-color: var(--table-bg);
  margin: 0 0 1rem 0;
  align-items: center;
`;
export const FilterBarOptions = styled.div`
  display: flex;
`;
export const FilterBarOption = styled.div`
  display: flex;
  color: var(--table-color);
  margin-right: 10px;
`;
export const FilterBarDropdown = styled.select`
  display: flex;
  margin-right: 15px;
`;