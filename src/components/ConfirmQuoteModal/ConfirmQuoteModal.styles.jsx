import styled from "styled-components";

/*--Table--*/
export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const TableTitle = styled.h5`
  text-align: center;
`;
export const CheckoutTable = styled.table`
  width: 100%;
  vertical-align: top;
  border-collapse: collapse;
  border-color: #dee2e6;
`;
export const Thead = styled.thead`
  border: 1px solid lightgrey;
  background-color: lightgrey;
  padding: 0.5rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Tr = styled.tr`
  border-bottom: 1px solid lightgrey;
`;
export const Th = styled.th`
  @media only screen and (max-width: 600px) {
    padding: 0.2rem;
  }
`;
export const Td = styled.td`
`;
export const TdCenter = styled.td`
  text-align: center;
`;
export const TdImg = styled.img`
  max-width: 10vw;
`;
export const Tbody = styled.tbody`
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const TableTotal = styled.div`
  display: flex;
  justify-content: end;
`;
