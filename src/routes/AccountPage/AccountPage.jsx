import React from "react";
import Navigation from "../Navigation/navigation";
import { AccountColumn, AccountContainer, AccountLi, AccountLink, AccountLinkTitle, AccountPhoto, AccountPhotoContainer, AccountPhotoHello, AccountPhotoHelloContainer, AccountPhotoName, AccountRow, AccountUl } from "./AccountPage.styles";
import * as Icon from "react-feather";
import { Outlet } from "react-router-dom";

const widgets = [
  { id: 1, icon: <Icon.User />, title: "Profile", link: "profile" },
  { id: 2, icon: <Icon.Download />, title: "My Quotes", link: "myquotes" },
  { id: 3, icon: <Icon.Settings />, title: "Settings", link: "settings" },
];

export default function AccountPage() {
  const currentUser = { firstName: "John", lastName: "Doe" }
  const photo = false;

  const handleLogout = () => {
    console.log('logout')
  }
  return (
    <React.Fragment>
      <AccountContainer>
        <AccountRow>
          <AccountColumn>
            <AccountPhotoContainer>
              {photo ? (
                <AccountPhoto
                  src={photo ? photo : <Icon.User />}
                  alt="account"
                />
              ) : (
                <Icon.User />
              )}
              <AccountPhotoHelloContainer>
                <AccountPhotoHello>Hello,</AccountPhotoHello>
                <AccountPhotoName>
                  {currentUser.firstName} {currentUser.lastName}
                </AccountPhotoName>
              </AccountPhotoHelloContainer>
            </AccountPhotoContainer>
            <AccountUl>
            {widgets.map((widget, key) => (
              <AccountLi
                key={widget.title}
              >
                <AccountLink
                  to={`/account/${widget.link}`}
                >
                  {widget.icon}
                  <AccountLinkTitle>
                    {widget.title}
                  </AccountLinkTitle>
                </AccountLink>
              </AccountLi>
            ))}
            <AccountLi>
              <AccountLink
                to="/"
                onClick={handleLogout}
              >
                <Icon.LogOut/>
                <AccountLinkTitle>
                  Log Out
                </AccountLinkTitle>
              </AccountLink>
            </AccountLi>
          </AccountUl>
          </AccountColumn>
          <Outlet />
        </AccountRow>
      </AccountContainer>
    </React.Fragment>
  );
}