import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 5.625rem 5.625rem 0 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 55px 1rem 0 1rem;
  }
`;
export const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const AboutColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-basis: 50%;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
    width: 100%;
  }
`;
export const AboutSh1 = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 600px) {
    align-self: center;
    margin-top: 1rem;
    font-size: 40px;
  }
`;
export const AboutBody1 = styled.div`
  font-size: 25px;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin: 0 0 2rem 0;
    font-size: 20px;
  }
`;
export const AboutLink = styled(Link)`
  border-radius: 30px;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: orange;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;

  :hover {
    color: black;
    background-color: lightgrey;
  }
  @media only screen and (max-width: 600px) {
    align-self: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const AboutColumnImg = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: end;
  align-items: end;
  margin-top: 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 0 1rem 0 1rem;
    margin-top: 2rem;
  }
`;
export const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
`;
export const AboutSection2 = styled.section`
  align-items: center;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
export const AboutColumnImg2 = styled.div`
  flex: 0 0 auto;
  width: 50%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
  @media (max-width: 768px) {
    text-align: center;
    flex-shrink: 0;
    width: 100%;
  }
`;
export const AboutColumn = styled.div`
  flex: 0 0 auto;
  width: 50%;
  max-width: 100%;
  margin-top: var(--bs-gutter-y);
  @media (max-width: 768px) {
    text-align: center;
    flex-shrink: 0;
    width: 100%;
  }
`;
export const AboutSh3 = styled.div`
  font-size: 50px;
  color: #201b42;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    margin-top: 1.5rem;
  }
`;
export const AboutBody4 = styled.div`
  font-size: 25px;
  color: #676666;
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
    margin: 0 1rem 0 1rem;
  }
`;