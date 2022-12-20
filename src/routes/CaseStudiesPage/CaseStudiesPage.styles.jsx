import { Link } from "react-router-dom";
import styled from "styled-components";

export const CaseContainer = styled.div`
  width: 100%;
  padding: 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const CaseHeroRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaseColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: start;
  margin-top: 5rem;
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
    margin-top: 1rem;
  }
`;
export const CaseSh1 = styled.h1`
  font-size: 50px;
  color: black;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: var(--slightblue);
  }
  @media only screen and (max-width: 600px) {
    align-self: center;
    font-size: 40px;
  }
`;
export const CaseP = styled.p`
  color: black;
  text-align: left;
  font-size: 24px;
  padding-bottom: 1rem;
  margin-top: 2rem;

  span {
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
`;
export const CaseTitle = styled.h1`
  text-align: center;
  margin-top: 7rem;
  color: white;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
`;
export const CaseRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    flex-shrink: 1;
  }
`;
export const CaseCard = styled.div`
  width: 25rem;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const CaseCardImg = styled.img`
  @media only screen and (max-width: 600px) {
    background-size: 100%;
  }
`;

export const CaseCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 2.81rem 2.81rem 2.81rem;
  @media only screen and (max-width: 600px) {
    padding: 14rem 1rem 0.5rem 1rem;
  }
`;

export const CaseTopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CaseIcon = styled.img`
  height: 25%;
`;
export const CaseSh2 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 1px;
  padding: 0 0 0 0.5rem;
`;
export const CaseBody = styled.div`
  font-size: 22px;
  color: #676666;
  padding-top: 1rem;
`;
export const CaseLink = styled(Link)`
  font-size: 23px;
  margin-top: 1rem;
`;
