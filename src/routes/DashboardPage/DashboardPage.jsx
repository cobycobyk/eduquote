import React, {useState, useEffect, useContext} from "react";
import { DisplayFlexJCenter, TextDivider, TextDividerSolid } from "../../assets/css/custom.styles";
import { DAddButton, DAddLink, DashContainer, DMain, DMainNav, DMainNavLeft, DMainNavRight, DNavButton, DNavLink, DSH1, DSH3, DSidebar, DSImg, DSInfo } from "./DashboardPage.styles";
import qlogo from '../../assets/images/logos/qlogo.png';
import { Form, Outlet, useFormAction } from "react-router-dom";
import * as Icon from "react-feather";
import { getUserInfo } from "../../utils/firebase";
import { UserContext } from "../../context/user.context";


export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const changePage = (e) => {
    setCurrentPage(e)
  }
  useEffect(() => {
    if (currentUser === null) {
      return setCurrentUserInfo(null);
    }
    const userInfo = async () => {
      const info = await getUserInfo(currentUser);
      setCurrentUserInfo(info);
    };
    userInfo();
  }, [currentUser]);

  return (
    <React.Fragment>
      <DashContainer>
        <DSidebar>
          <DisplayFlexJCenter>
            <DSImg src={qlogo} alt="logo" />
            <DSH3>Quote Builder</DSH3>
          </DisplayFlexJCenter>
          <TextDividerSolid></TextDividerSolid>
          <DSInfo>
            <DSH1>Photo</DSH1>
            <DSH1>Name</DSH1>
          </DSInfo>
          <DSH3>Email</DSH3>
          <TextDivider>Dashboard</TextDivider>
          <DNavLink
            to="/dashboard"
            onClick={(e) => setCurrentPage("Dashboard")}
          >
            Dashboard
          </DNavLink>
          <TextDivider>Clients</TextDivider>
          <DNavLink
            to="clients"
            state={{data: currentUserInfo}}
            onClick={(e) => setCurrentPage("Clients")}>
            All Clients
          </DNavLink>
          <DAddLink
            to="client/new"
            state={{data: currentUserInfo}}
            onClick={(e) => setCurrentPage("Add Client")}
            >
              Add Client
            </DAddLink>
          <TextDivider>Quotes</TextDivider>
          <DNavLink to="quotes" onClick={(e) => setCurrentPage("Quotes")}>
            All Quotes
          </DNavLink>
          <DNavLink
            to="/"
            onClick={(e) => setCurrentPage("New Quote")}
          >
            New Quote
          </DNavLink>
          <TextDivider>Catalogues</TextDivider>
          <DNavLink
            to="catalogs"
            onClick={(e) => setCurrentPage("All Catalogues")}
          >
            All Catalogs
          </DNavLink>
          <DNavLink
            to="clients"
            onClick={(e) => setCurrentPage("New Catalogue")}
          >
            New Catalog
          </DNavLink>
          <TextDivider>Settings</TextDivider>
          <DNavLink to="settings" onClick={(e) => setCurrentPage("Settings")}>
            Settings
          </DNavLink>
        </DSidebar>
        <DMain>
          <DMainNav>
            <DMainNavLeft>{currentPage}</DMainNavLeft>
            <DMainNavRight>
              <DNavButton>
                <Icon.Plus />
                Create
              </DNavButton>
              <Icon.ChevronDown />
            </DMainNavRight>
          </DMainNav>
          <TextDividerSolid />
          <Outlet />
        </DMain>
      </DashContainer>
    </React.Fragment>
  );
}