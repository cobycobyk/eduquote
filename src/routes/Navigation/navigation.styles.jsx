import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopNav = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: var(--header-bg);
  box-shadow: var(--box-shadow);
`;

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
    margin: 0;
  }
`;

export const TopNavLogo = styled(Link)`
  font-weight: 700;
  font-size: 24px;
  padding: 0 0 6px;
  width: 250px;
`;
export const TopNavLogoImg = styled.img`
  display: inline-block;
  height: 36px;
  line-height: 70px;
`;

export const TopNavMiddle = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const TopNavMiddleSmall = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
export const TopNavUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    visibility: ${({ visibility }) =>
      visibility === "true" ? "visible" : "collapse"};
    width: 200px;
    position: absolute;
    inset: 0px 0px auto auto;
    transform: translate3d(-20px, 60px, 0px);
    background-color: white;
    border-radius: 0.5rem;
  }
`;
export const TopNavLi = styled.li`
  display: block;
  position: relative;
  margin: 0 15px;
  @media only screen and (max-width: 600px) {
    padding: 10px;
    :hover {
      background-color: darkgrey;
    }
  }
`;
export const TopNavLink = styled(Link)`
  color: var(--sidebar-dark-menu-item-color);
  font-weight: bold;
  :hover {
    color: orange;
  }
`;

export const TopNavSignin = styled(Link)`
  color: black;
  font-weight: bold;
  border: 1px solid lightgrey;
  border-radius: 30px;
  padding: 7px 20px;
  text-decoration: none;
  :hover {
    background-color: orange;
    border: 1px solid orange;
    color: black;
    cursor: pointer;
  }
`;

export const TopNavProfile = styled.div`
  color: black;
  border: 1px solid lightgrey;
  border-radius: 30px;
  padding: 7px 20px;
  background-color: white;
  :hover {
    background-color: orange;
    border: 1px solid orange;
    color: black;
    cursor: pointer;
  }
`;
export const TopNavRightShow = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const TopNavRight = styled.div`
  float: right;
  line-height: 28px;
`;
export const TopNavRightSmall = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
export const TopNavRightSmallLines = styled.div`
  width: 25px;
  position: relative;
  margin-left: 25px;
  @media only screen and (max-width: 600px) {
    display: block;
    cursor: pointer;
    hr {
      margin: 0.75rem 0;
    }
  }
`;

export const ProfileDropDown = styled.div`
  width: 200px;
  position: absolute;
  inset: 0px 0px auto auto;
  transform: translate3d(-20px, 60px, 0px);
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  visibility: ${({ open }) => (open ? "visible" : "collapse")};
`;
export const ProfileDropDownLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const ProfileDropDownLink = styled(Link)`
  width: 100%;
  padding: 0.25rem 1rem;
  margin-bottom: 0.25rem;
  font-weight: 400;
  color: black;
  text-decoration: none;
  :hover {
    background-color: lightgrey;
    color: black;
  }
`;
export const ProfileLogout = styled.div`
  width: 100%;
  padding: 0.25rem 1rem;
  font-weight: 400;
  color: black;
  :hover {
    background-color: lightgrey;
    color: black;
  }
`;
