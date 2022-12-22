import React, {useState} from "react";
import { DisplayFlex, DisplayFlexJCenter, TextDivider, TextDividerSolid } from "../../assets/css/custom.styles";
import { DAddButton, DashContainer, DMain, DMainNav, DMainNavLeft, DMainNavRight, DNavButton, DNavLink, DSH1, DSH3, DSidebar, DSImg, DSInfo } from "./DashboardPage.styles";
import qlogo from '../../assets/images/logos/qlogo.png';
import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";
import { createClient, getClients } from "./client";
import * as Icon from "react-feather";

export async function action() {
  const client = await createClient();
  console.log('client')
  return redirect(`/dashboard/clients/${client.id}/edit`);
};

export async function loader({request}) {
  const clients = await getClients();
  return clients;
}

export default function DashboardPage() {
  const clients = useLoaderData();
  const [currentPage, setCurrentPage] = useState("Dashboard");
  
  const changePage = (e) => {
    setCurrentPage(e)
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
            <DSH1>Photo</DSH1>
            <DSH1>Name</DSH1>
          </DSInfo>
          <DSH3>Email</DSH3>
          <TextDivider>Dashboard</TextDivider>
          <DNavLink to="/dashboard" onClick={(e) => setCurrentPage("Dashboard")}>
            Dashboard
          </DNavLink>
          <TextDivider>Clients</TextDivider>
          <DNavLink to="clients" onClick={(e) => setCurrentPage("Clients")}>
            All Clients
          </DNavLink>
            <Form method="post">
              <DAddButton
                type="submit"
                onClick={(e) => setCurrentPage("Add Client")}
                >
                Add Client
              </DAddButton>
            </Form>
          <TextDivider>Quotes</TextDivider>
          <DNavLink to="quotes" onClick={(e) => setCurrentPage("Quotes")}>
            All Quotes
          </DNavLink>
          <DNavLink to="quote" onClick={(e) => setCurrentPage("New Quote")}>
            New Quote
          </DNavLink>
          <TextDivider>Catalogues</TextDivider>
          <DNavLink
            to="clients"
            onClick={(e) => setCurrentPage("All Catalogues")}
          >
            All Catalogues
          </DNavLink>
          <DNavLink
            to="clients"
            onClick={(e) => setCurrentPage("New Catalogue")}
          >
            New Catalogue
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
              <Icon.Plus />
              <DNavButton>Create</DNavButton>
            </DMainNavRight>
          </DMainNav>
          <TextDividerSolid />
          <Outlet />
        </DMain>
      </DashContainer>
    </React.Fragment>
  );
}