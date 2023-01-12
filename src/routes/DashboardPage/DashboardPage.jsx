import React, {useState, useContext} from "react";
import { DisplayFlexJCenter, TextDivider, TextDividerSolid } from "../../assets/css/custom.styles";
import { DAddLink, DashContainer, DMain, DMainNav, DMainNavLeft, DMainNavRight, DNavButton, DNavLink, DSH1, DSH3, DSH5, DSidebar, DSImg, DSInfo } from "./DashboardPage.styles";
import qlogo from '../../assets/images/logos/qlogo.png';
import { Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { UserContext } from "../../context/user.context";


export default function DashboardPage({currentPage, setCurrentPage}) {
  const { currentUserInfo, currentUser } = useContext(UserContext);

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
            <DSH3>{currentUser?.displayName || currentUserInfo?.firstName}</DSH3>
          </DSInfo>
          <DSH5>{currentUser?.email}</DSH5>
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
            onClick={(e) => setCurrentPage("Clients")}>
            All Clients
          </DNavLink>
          <DAddLink
            to="clients/new"
            onClick={(e) => setCurrentPage("Add Client")}
            >
              Add Client
            </DAddLink>
          <TextDivider>Quotes</TextDivider>
          <DNavLink to="quotes" onClick={(e) => setCurrentPage("Quotes")}>
            All Quotes
          </DNavLink>
          <DNavLink
            to="quotes/new"
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
            to="catalogs/new"
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