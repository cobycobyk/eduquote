import React, {useState, useContext} from "react";
import { DisplayFlexJCenter, TextDivider, TextDividerSolid } from "../../assets/css/custom.styles";
import { DAddLink, DashContainer, DCreateDropdown, DCreateDropdownLink, DCreateDropdownLinks, DMain, DMainNav, DMainNavLeft, DMainNavRight, DNavButton, DNavLink, DSH1, DSH3, DSH5, DSidebar, DSImg, DSInfo } from "./DashboardPage.styles";
import qlogo from '../../assets/images/logos/qlogo.png';
import { Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { UserContext } from "../../context/user.context";


export default function DashboardPage({currentPage, setCurrentPage}) {
  const { currentUserInfo, currentUser } = useContext(UserContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setToggleMenu(false);
  }

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
            <DSH3>
              {currentUser?.displayName || currentUserInfo?.firstName}
            </DSH3>
          </DSInfo>
          <DSH5>{currentUser?.email}</DSH5>
          <TextDivider>Dashboard</TextDivider>
          <DNavLink to="/dashboard" onClick={() => setCurrentPage("Dashboard")}>
            Dashboard
          </DNavLink>
          <TextDivider>Clients</TextDivider>
          <DNavLink to="clients" onClick={() => setCurrentPage("All Clients")}>
            All Clients
          </DNavLink>
          <DAddLink
            to="clients/new"
            onClick={() => setCurrentPage("New Client")}
          >
            Add Client
          </DAddLink>
          <TextDivider>Quotes</TextDivider>
          <DNavLink to="quotes" onClick={() => setCurrentPage("All Quotes")}>
            All Quotes
          </DNavLink>
          <DNavLink to="quotes/new" onClick={() => setCurrentPage("New Quote")}>
            New Quote
          </DNavLink>
          <TextDivider>Catalogs</TextDivider>
          <DNavLink
            to="products"
            onClick={() => setCurrentPage("All Products")}
          >
            All Products
          </DNavLink>
          <DNavLink
            to="products/new"
            onClick={() => setCurrentPage("New Product")}
          >
            Add Product
          </DNavLink>
          <DNavLink
            to="products/settings"
            onClick={() => setCurrentPage("Catalog Settings")}
          >
            {currentUserInfo?.company} Catalog Settings
          </DNavLink>
          <TextDivider>Settings</TextDivider>
          <DNavLink to="settings" onClick={() => setCurrentPage("Settings")}>
            Settings
          </DNavLink>
        </DSidebar>
        <DMain>
          <DMainNav>
            <DMainNavLeft>{currentPage}</DMainNavLeft>
            <DMainNavRight>
              <DNavButton onClick={() => setToggleMenu(!toggleMenu)}>
                <Icon.Plus />
                Create
              </DNavButton>
              <Icon.ChevronDown />
              <DCreateDropdown open={toggleMenu}>
                <DCreateDropdownLinks>
                  <DCreateDropdownLink
                    to="clients/new"
                    onClick={() => handleMenuClick("Add Client")}
                  >
                    Client
                  </DCreateDropdownLink>
                  <DCreateDropdownLink
                    to="quotes/new"
                    onClick={() => handleMenuClick("Add Quote")}
                  >
                    Quote
                  </DCreateDropdownLink>
                  <DCreateDropdownLink
                    to="products/new"
                    onClick={() => handleMenuClick("Add Catalog")}
                  >
                    Product
                  </DCreateDropdownLink>
                </DCreateDropdownLinks>
              </DCreateDropdown>
            </DMainNavRight>
          </DMainNav>
          <TextDividerSolid />
          <Outlet />
        </DMain>
      </DashContainer>
    </React.Fragment>
  );
}