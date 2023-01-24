import React, { useContext } from "react";
import Navigation from "../Navigation/navigation";
import { AccountColumn, AccountContainer, AccountLi, AccountLink, AccountLinkTitle, AccountPhoto, AccountPhotoContainer, AccountPhotoHello, AccountPhotoHelloContainer, AccountPhotoName, AccountRow, AccountUl } from "./AccountPage.styles";
import * as Icon from "react-feather";
import { signOutUser } from "../../utils/firebase";
import { UserContext } from "../../context/user.context";
import { Outlet } from "react-router-dom";

const widgets = [
  { id: 1, icon: <Icon.User />, title: "Profile", link: "profile" },
  { id: 2, icon: <Icon.Download />, title: "My Quotes", link: "myquotes" },
  { id: 3, icon: <Icon.Settings />, title: "Settings", link: "settings" },
];

export default function AccountPage() {
  const { currentUser, currentUserInfo } = useContext(UserContext);

  const handleLogOut = async () => {
    await signOutUser();
  };
  return (
    <React.Fragment>
      <AccountContainer>
        <AccountColumn>
          <AccountRow>
            <AccountPhotoContainer>
              {currentUser?.avatar ? (
                <AccountPhoto
                  src={
                    currentUser?.avatar ? currentUser?.avatar : <Icon.User />
                  }
                  alt="account"
                />
              ) : (
                <Icon.User />
              )}
              <AccountPhotoHelloContainer>
                <AccountPhotoHello>Hello,</AccountPhotoHello>
                <AccountPhotoName>
                  {currentUser?.displayName || currentUserInfo?.firstName}
                </AccountPhotoName>
              </AccountPhotoHelloContainer>
            </AccountPhotoContainer>
            <AccountUl>
              {widgets.map((widget, key) => (
                <AccountLi key={widget.title}>
                  <AccountLink to={`/account/${widget.link}`}>
                    {widget.icon}
                    <AccountLinkTitle>{widget.title}</AccountLinkTitle>
                  </AccountLink>
                </AccountLi>
              ))}
              <AccountLi>
                <AccountLink to="/" onClick={handleLogOut}>
                  <Icon.LogOut />
                  <AccountLinkTitle>Log Out</AccountLinkTitle>
                </AccountLink>
              </AccountLi>
            </AccountUl>
          </AccountRow>
          <Outlet />
        </AccountColumn>
      </AccountContainer>
    </React.Fragment>
  );
}