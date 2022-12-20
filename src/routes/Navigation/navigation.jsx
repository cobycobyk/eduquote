import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import qlogo from '../../assets/images/logos/qlogo.png';
import { ProfileDropDown, ProfileDropDownLink, ProfileDropDownLinks, TopNav, TopNavContainer, TopNavLi, TopNavLink, TopNavLogo, TopNavLogoImg, TopNavMiddle, TopNavProfile, TopNavRight, TopNavRightShow, TopNavSignin, TopNavUl } from "./navigation.styles";


const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Build A Quote", link: "/buildaquote" },
  { id: 4, title: "Case Studies", link: "/casestudies" },
  { id: 5, title: "How-To", link: "/howto" },
  { id: 6, title: "Pricing", link: "/pricing" },
  { id: 7, title: "About", link: "/about" },
  { id: 8, title: "Contact", link: "/contact" },
];

export default function Navigation() {
  const [currentUser, setCurrentUser] = useState(true);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <React.Fragment>
      <TopNav>
        <TopNavContainer>
          <TopNavLogo to="/">
            <TopNavLogoImg src={qlogo} alt="logo" />
          </TopNavLogo>
          <TopNavMiddle>
            <TopNavUl>
              {navLinks.map((navLink, key) => (
                <TopNavLi key={key}>
                  <TopNavLink to={navLink.link}>{navLink.title}</TopNavLink>
                </TopNavLi>
              ))}
            </TopNavUl>
          </TopNavMiddle>
          {currentUser ? (
            <React.Fragment>
              <ProfileDropDown open={toggleProfile}>
                <ProfileDropDownLinks>
                  <ProfileDropDownLink
                    to="/account"
                    onClick={() => setToggleProfile(!toggleProfile)}
                  >
                    Account
                  </ProfileDropDownLink>
                  <ProfileDropDownLink
                    to="/quotebuilder"
                    onClick={() => setToggleProfile(!toggleProfile)}
                  >
                    New Quote
                  </ProfileDropDownLink>
                  <ProfileDropDownLink
                    to="/account/myquotes"
                    onClick={() => setToggleProfile(!toggleProfile)}
                  >
                    My Quotes
                  </ProfileDropDownLink>
                  {/* {currentUser.isAdmin ? (
                  <React.Fragment>
                    <hr />
                    <ProfileDropDownLink
                      to="/upload"
                      onClick={() => setToggleProfile(!toggleProfile)}
                    >
                      Upload Assets
                    </ProfileDropDownLink>
                  </React.Fragment>
                ) : null} */}
                  <hr />
                  <ProfileDropDownLink to="/">Logout</ProfileDropDownLink>
                </ProfileDropDownLinks>
              </ProfileDropDown>
              <TopNavRightShow>
                <TopNavRight>
                  <TopNavProfile
                    onClick={() => setToggleProfile(!toggleProfile)}
                  >
                    Profile
                  </TopNavProfile>
                </TopNavRight>
              </TopNavRightShow>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <TopNavRightShow>
                <TopNavRight>
                  <TopNavSignin to="/signin">Sign In</TopNavSignin>
                </TopNavRight>
              </TopNavRightShow>
            </React.Fragment>
          )}
        </TopNavContainer>
      </TopNav>
      <Outlet />
    </React.Fragment>
  );
}