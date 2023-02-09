import React, {useState, useContext} from "react";
import { DisplayFlex, DisplayFlexHover, DisplayFlexJCenter, TextDivider, TextDividerDark, TextDividerSolid, TextDividerSolidDark } from "../../assets/css/custom.styles";
import { DAddLink, DashContainer, DCreateDropdown, DCreateDropdownLink, DCreateDropdownLinks, DMain, DMainNav, DMainNavLeft, DMainNavRight, DNavButton, DNavLink, DNavLinkIcon, DSH1, DSH3, DSH5, DSidebar, DSImg, DSInfo, DSName } from "./DashboardPage.styles";
import qlogo from '../../assets/images/logos/qlogo.png';
import { Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { UserContext } from "../../context/user.context";
//new


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
          <DSInfo>
            <DSName>
              {currentUser?.displayName ||
                currentUserInfo?.firstName + " " + currentUserInfo?.lastName}
            </DSName>
          </DSInfo>
          <DSName>{currentUser?.email}</DSName>
          <TextDividerDark>Dashboard</TextDividerDark>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.Cloud />
            </DNavLinkIcon>
            <DNavLink
              to="/dashboard"
              onClick={() => setCurrentPage("Dashboard")}
            >
              Dashboard
            </DNavLink>
          </DisplayFlex>
          <TextDividerDark>Clients</TextDividerDark>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.User />
            </DNavLinkIcon>
            <DNavLink
              to="clients"
              onClick={() => setCurrentPage("All Clients")}
            >
              All Clients
            </DNavLink>
          </DisplayFlex>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.UserPlus />
            </DNavLinkIcon>
            <DNavLink
              to="clients/new"
              onClick={() => setCurrentPage("New Client")}
            >
              Add Client
            </DNavLink>
          </DisplayFlex>

          <TextDividerDark>Quotes</TextDividerDark>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.FileText />
            </DNavLinkIcon>
            <DNavLink to="quotes" onClick={() => setCurrentPage("All Quotes")}>
              All Quotes
            </DNavLink>
          </DisplayFlex>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.FilePlus />
            </DNavLinkIcon>
            <DNavLink
              to="quotes/new"
              onClick={() => setCurrentPage("New Quote")}
            >
              New Quote
            </DNavLink>
          </DisplayFlex>
          <TextDividerDark>Catalogs</TextDividerDark>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.Circle />
            </DNavLinkIcon>
            <DNavLink
              to="products"
              onClick={() => setCurrentPage("All Products")}
            >
              All Products
            </DNavLink>
          </DisplayFlex>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.PlusCircle />
            </DNavLinkIcon>
            <DNavLink
              to="products/new"
              onClick={() => setCurrentPage("New Product")}
            >
              Add Product
            </DNavLink>
          </DisplayFlex>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.Settings />
            </DNavLinkIcon>
            <DNavLink
              to="products/settings"
              onClick={() => setCurrentPage("Catalog Settings")}
            >
              {currentUserInfo?.company.charAt(0).toUpperCase() +
                currentUserInfo?.company.slice(1)}{" "}
              Catalog Settings
            </DNavLink>
          </DisplayFlex>
          <TextDividerDark>Settings</TextDividerDark>
          <DisplayFlex>
            <DNavLinkIcon>
              <Icon.Settings />
            </DNavLinkIcon>
            <DNavLink to="settings" onClick={() => setCurrentPage("Settings")}>
              Settings
            </DNavLink>
          </DisplayFlex>
        </DSidebar>
        <DMain>
          <DMainNav>
            <DMainNavLeft>{currentPage.toUpperCase()}</DMainNavLeft>
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
          <TextDividerSolidDark />
          <Outlet />
        </DMain>
      </DashContainer>
    </React.Fragment>
  );
}