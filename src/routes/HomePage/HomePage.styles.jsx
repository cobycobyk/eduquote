import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundImage = styled.div`
  padding: 75px 0 0 0;
  position: relative;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const HomeSectionContainer = styled.div`
  width: 100%;
  padding: 5.625rem 5.625rem 0 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const HomeSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    text-align: center;
    flex-shrink: 0;
    width: 100%;
  }
`;
export const HomeSh1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: orange;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export const HomeSh2 = styled.h2`
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: orange;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export const HomeSh3 = styled.h3`
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: orange;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export const HomeSh4 = styled.h4`
  text-align: center;
  letter-spacing: 1px;
  width: 50%;
  margin-top: 2rem;
  color: grey;

  span {
    color: orange;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export const HomeBody1 = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: grey;
  margin-bottom: 1rem;

  span {
    color: orange;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export const ButtonText = styled.div`
  margin-right: 10px;
  text-decoration: none;
`;
export const HomeActionLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ color }) => (color === "var(--charcoal)" ? "white" : "black")};
  cursor: pointer;
  margin-top: 1.5rem;
  font-size: 1rem;
  width: 10.5rem;
  height: 2.75rem;
  background-color: ${({ color }) => `${color}`};
  border: ${({ color }) => `1px solid ${color}`};

  :hover {
    color: white;
    border: 1px solid orange;
`;

export const HomeHeroImg = styled.img`
    margin-top: 3rem;
`;
export const HomeClientsContainer = styled.div`
  width: 100vw;
  padding: 4rem 5.625rem;
  background-color: whitesmoke;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const HomePartSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5.625rem 5.625rem 2rem 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    height: 5rem;
  }
`;
export const HomePartImgColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HomePartImg = styled.img`
  height: 1.5rem;
`;

export const HomeFSection = styled.section`
  padding: 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;
export const HomeFRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    align-items: baseline;
  }
`;
export const HomeFColumn = styled.div`
  width: 18.75rem;
`;
export const HomeFCard = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  word-wrap: break-word;
  background-color: transparent;
  background-clip: border-box;
  @media only screen and (max-width: 600px) {
    width: 7rem;
  }
`;
export const HomeFIcon = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  flex-shrink: 0;
  height: 3rem;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
  @media only screen and (max-width: 600px) {
    width: 80px;
  }
`;
export const HomeFSub = styled.div`
  font-size: 20px;
  color: grey;
  margin-top: 1rem;
`