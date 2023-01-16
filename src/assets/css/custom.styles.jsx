import styled from "styled-components";

export const Danger = styled.span`
  --bs-text-opacity: 1;
  color: red !important;
`;
export const Bold = styled.span`
  font-weight: bold;
`;
export const HoverOrange = styled.span`
  :hover {
    color: orange;
  }
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
export const TextDividerSolid2 = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 0.5rem;
`;
export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const DisplayFlexJCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CancelButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: red;
  margin-top: 0.5rem;
  margin-bottom: 0.05rem;
  opacity: 0.8;

  :hover {
    color: white;
    opacity: 1;
  }
`;
export const SaveButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: lightgrey;
  margin-top: 0.5rem;
  margin-bottom: 0.05rem;

  :hover {
    color: white;
    background-color: orange;
  }
`;

export const HoverPointer = styled.div`
  text-align: center;
  :hover {
    color: red;
    cursor: pointer;
  }
`