import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DashContainer = styled.div`
  display: flex;
`;
export const DSidebar = styled.div`
  width: 19rem;
  height: 100vmin;
  background-color: lightgrey;
  border-right: solid 1px #e3e3e3;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
export const DSImg = styled.img`
  height: 3rem;
  margin: 0 1rem 0 0;
`;
export const DSH1 = styled.h1`
  font-weight: bold;
`;
export const DSInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0 .5rem;
  ${DSH1} {
    margin-right: 1rem;
  }
`;
export const DNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 10px;
  :hover {
    color: white;
    background-color: orange;
  }
`;

export const DSH2 = styled.h2`
  font-weight: bold;
`;
export const DSH3 = styled.h3`
  font-weight: bold;
`;

export const DIContainer = styled.div`
  display: flex;
  margin: 75px 100px;
  flex-basis: 75%;
`;
export const DMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1rem;
  `;
  export const DMainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;
export const DMainNavLeft = styled.h1`
  font-weight: bold;
`;
export const DMainNavRight = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  padding-left: 1rem;
  background-color: lightgrey;
  :hover {
    cursor: pointer;
    background-color: orange;
    color: white;
  }
`;
export const DNavButton = styled.div`
  padding: 0.75rem 1rem 0.75rem 0.25rem;
`;
export const DAddButton = styled.button`
  display: flex;
  justify-content: start;
  color: black;
  text-decoration: none;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  background-color: inherit;
  :hover {
    color: white;
    background-color: orange;
  }
`;