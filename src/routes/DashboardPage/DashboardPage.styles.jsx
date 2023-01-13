import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const DashContainer = styled.div`
  display: flex;
  padding: 4.625rem 0;
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
export const DSH5 = styled.h5`
  font-weight: bold;
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
  height: 3.5rem;
`;
export const DMainNavLeft = styled.h1`
  font-weight: bold;
`;
export const DMainNavRight = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  padding: 0 1rem;
  background-color: lightgrey;
  :hover {
    cursor: pointer;
    background-color: orange;
    color: white;
  }
`;
export const DNavButton = styled.div`
  padding: 0.75rem 0.5rem 0.75rem 0.25rem;
  display: flex;
  align-items: center;
`;

export const DCreateDropdown = styled.div`
  swidth: 200px;
  position: absolute;
  inset: 90px 20px auto auto;
  transform: translate3d(-20px, 60px, 0px);
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  visibility: ${({ open }) => (open ? "visible" : "collapse")}
`;
export const DCreateDropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const DCreateDropdownLink = styled(Link)`
  width: 100%;
  padding: 0.25rem 1rem;
  margin-bottom: 0.25rem;
  font-weight: 400;
  color: black;
  text-decoration: none;
  :hover {
    background-color: orange;
    color: white;
  }
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
export const DAddLink = styled(Link)`
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

/*------- DashClients ------*/
export const DTable = styled.table`
  width: 100%;
  vertical-align: top;
  border-collapse: collapse;
  border-color: #dee2e6;
`;
export const Thead = styled.thead`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-bottom: 1px solid lightgrey;
  background-color: lightgrey;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Tbody = styled.tbody`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Tr = styled.tr`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-bottom: 1px solid lightgrey;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Th = styled.th`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  padding: 0.5rem;
  @media only screen and (max-width: 600px) {
    padding: 0.2rem;
  }
`;
export const Td = styled.td`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  padding-left: 0.5rem;
`;
export const TdLink = styled(Link)`
  float: right;
  @media only screen and (max-width: 600px) {
    margin-left: 0.2rem;
  }
`;