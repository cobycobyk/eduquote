import styled from "styled-components";

export const Danger = styled.span`
  --bs-text-opacity: 1;
  color: red !important;
`;
export const TextDivider = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 85%;
  font-weight: 700;
  margin: 1rem 0;

  :before {
    content: "";
    height: 1px;
    background-color: silver;
    flex-grow: 3;
    margin-right: 1rem;
  }
  :after {
    content: "";
    height: 1px;
    background-color: silver;
    flex-grow: 3;
    margin-left: 1rem;
  }
`;
export const TextDividerSolid = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 85%;
  font-weight: 700;
  margin: 1rem 0;
  content: "-"

  :before {
    content: "";
    height: 1px;
    background-color: black;
    flex-grow: 3;
  }
  :after {
    content: "";
    height: 1px;
    background-color: black;
    flex-grow: 3;
  }
`;
export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`
export const DisplayFlexJCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`