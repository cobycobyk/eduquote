import React, { useState, useEffect, useContext, useRef } from "react";
import qlogo from '../../assets/images/logos/qlogo.png';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase";
import { ProfileDropDown, ProfileDropDownLink, ProfileDropDownLinks, TopNav, TopNavContainer, TopNavLi, TopNavLink, TopNavLogo, TopNavLogoImg, TopNavMiddle, TopNavMiddleSmall, TopNavProfile, TopNavRight, TopNavRightShow, TopNavRightSmall, TopNavRightSmallLines, TopNavSignin, TopNavUl } from "./navigation.styles";


const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Build A Quote", link: "/quote" },
  // { id: 4, title: "Case Studies", link: "/casestudies" },
  // { id: 5, title: "How-To", link: "/howto" },
  { id: 6, title: "Pricing", link: "/pricing" },
  { id: 7, title: "About", link: "/about" },
  { id: 8, title: "Contact", link: "/contact" },
];

export default function Navigation() {
  const { currentUserInfo } = useContext(UserContext);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const menuRef = useRef();
  const smallProfileRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const closeDowpdown = (e) => {
      if (e.target !== menuRef.current) {
        setToggleLinks(false);
      }
    };
    document.body.addEventListener("click", closeDowpdown);

    return () => document.body.removeEventListener("click", closeDowpdown);
  }, []);

  const handleLogOut = async () => {
    await signOutUser();
  }

  const showLinks = () => {
    setToggleLinks(!toggleLinks);
    if (toggleProfile) {
      setToggleProfile(false);
    }
  };

  const showProfile = () => {
    setToggleProfile(!toggleProfile);
    if (toggleLinks) {
      setToggleLinks(false);
    }
  };

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
          <TopNavMiddleSmall>
            <TopNavUl visibility={`${toggleLinks}`}>
              {navLinks.map((navLink, key) => (
                <TopNavLi key={key}>
                  <TopNavLink to={navLink.link} onClick={showLinks}>
                    {navLink.title}
                  </TopNavLink>
                </TopNavLi>
              ))}
            </TopNavUl>
          </TopNavMiddleSmall>
          {currentUserInfo ? (
            <React.Fragment>
              <ProfileDropDown open={toggleProfile}>
                <ProfileDropDownLinks>
                  <ProfileDropDownLink
                    to="/account"
                    onClick={() => setToggleProfile(!toggleProfile)}
                  >
                    Account
                  </ProfileDropDownLink>
                  {currentUserInfo.role !== "client" ? (
                    <ProfileDropDownLink
                      to="/dashboard"
                      onClick={() => setToggleProfile(!toggleProfile)}
                    >
                      Dashboard
                    </ProfileDropDownLink>
                  ) : null}
                  <ProfileDropDownLink
                    to="/quote"
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
                  <hr />
                  <ProfileDropDownLink to="/" onClick={handleLogOut}>
                    Logout
                  </ProfileDropDownLink>
                </ProfileDropDownLinks>
              </ProfileDropDown>
              <TopNavRightShow>
                <TopNavRight>
                  <TopNavProfile
                    ref={profileRef}
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
                  <TopNavSignin to="/login">Sign In</TopNavSignin>
                </TopNavRight>
              </TopNavRightShow>
            </React.Fragment>
          )}
          <TopNavRightSmall>
            {currentUserInfo ? (
              <TopNavProfile ref={smallProfileRef} onClick={showProfile}>
                Profile
              </TopNavProfile>
            ) : (
              <TopNavSignin to="/signin">Sign In</TopNavSignin>
            )}
            <TopNavRightSmallLines ref={menuRef} onClick={showLinks}>
              <hr />
              <hr />
              <hr />
            </TopNavRightSmallLines>
          </TopNavRightSmall>
        </TopNavContainer>
      </TopNav>
    </React.Fragment>
  );
}