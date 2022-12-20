import styled from "styled-components";
import { Link } from "react-router-dom";

export const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
`;

export const CaseHero = styled.div`
  padding: 5px 0 5px 0;
  align-self: center;
  position: relative;
  opacity: 75%;
  background-position: top center;
  width: 100%;
  background-size: 140%;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 0;
  }
`;
export const CaseColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  text-align: center;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
`;
export const CaseSh4 = styled.h4`
  font-size: 100px;
  color: black;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 75px;
  }
`;
export const CaseVideoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ color }) => (color === "purple" ? "white" : "black")};
  cursor: pointer;
  font-size: 1rem;
  width: 12.5rem;
  height: 3rem;
  margin-top: 2rem;
  background-color: ${({ color }) =>
    color === "purple" ? "var(--spurple)" : "white"};

  :hover {
    background-color: ${({ color }) =>
      color === "purple" ? `white` : "var(--spurple)"};
    color: ${({ color }) => (color === "purple" ? `black` : "white")};
  }
  @media only screen and (max-width: 600px) {
    height: 3rem;
    margin: 1 0.5rem;
    padding: 0 1rem;
  }
`;
export const CaseTitleRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;
export const CaseBody1 = styled.div`
  font-size: 25px;
  color: #ffffff;
  @media only screen and (max-width: 600px) {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 20px;
  }
`;
export const CaseLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ color }) => (color === "purple" ? "white" : "black")};
  cursor: pointer;
  font-size: 1rem;
  width: 12.5rem;
  height: 3rem;
  margin-top: 2rem;
  background-color: ${({ color }) =>
    color === "purple" ? "var(--spurple)" : "white"};

  :hover {
    background-color: ${({ color }) =>
      color === "purple" ? `white` : "var(--spurple)"};
    color: ${({ color }) => (color === "purple" ? `black` : "white")};
  }
  @media only screen and (max-width: 600px) {
    height: 3rem;
    margin: 1rem 0.5rem 2rem 0.5rem;
    padding: 0 1rem;
  }
`;
export const CaseColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-basis: 40%;
  @media only screen and (max-width: 600px) {
    flex-basis: 0%;
  }
`;
export const CaseImg = styled.img`
  max-width: 100%;
  height: auto;
`;