import styled from "styled-components";


export const TableCard = styled.div`
  color: var(--bs-card-color)
  word-wrap: break-word;
  background-clip: initial;
  background-color: var(--bs-card-bg);
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
`;
export const TableCardBody = styled.div`
  color: var(--table-color);
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  `;
export const TableContainer = styled.div`
  overflow-x: auto;
`;
export const TableTable = styled.table`
  width: 100%;
`;
export const TableTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
`;
export const THeadDark = styled.thead`
  border-color: var(--table-border-color);
  color: var(--table-color);
  `;
  export const THDark = styled.th`
  border-width: 0 1px;
  font-weight: 600;
  padding: 0.75rem;
  `;
  export const TBodyDark = styled.tbody`
  border-top: 0;
  `;
  export const TRDark = styled.tr`
  :hover {
    cursor: pointer;
    background-color: var(--table-border-color);
  }
  `;
  export const TDDark = styled.td`
    border-color: var(--table-border-color);
    border-width: 1px 1px;
    padding: 0.75rem;
    max-width: 200px;
    overflow-wrap: break-word;
`;
