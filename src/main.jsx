import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root, {loader as rootLoader, action as rootAction} from "./routes/root";
import ErrorPage from './error-page';
import { action as clientAction, loader as clientLoader } from './routes/DashboardPage/DashboardPage';
import Navigation from "./routes/Navigation/navigation";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import SignupPage from "./routes/SignupPage/SignupPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import AboutPage from "./routes/AboutPage/AboutPage";
import CaseStudiesPage from "./routes/CaseStudiesPage/CaseStudiesPage";
import CaseStudyPage from "./routes/CaseStudyPage/CaseStudyPage";
import AccountPage from "./routes/AccountPage/AccountPage";
import ProfilePage from "./routes/AccountPage/ProfilePage";
import MyQuotesPage from "./routes/AccountPage/MyQuotesPage";
import AccountSettingsPage from "./routes/AccountPage/AccountSettingsPage";
import DashboardPage from "./routes/DashboardPage/DashboardPage";
import DashIndex from "./routes/DashboardPage/DashIndex";
import DashClients from "./routes/DashboardPage/DashClients";
import DashClientEdit, {action as editAction} from "./routes/DashboardPage/DashClientEdit";
import DashClient from "./routes/DashboardPage/DashClient";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "account",
            element: <AccountPage />,
            children: [
              { index: true, element: <ProfilePage /> },
              {
                path: "/account/profile",
                element: <ProfilePage />,
              },
              {
                path: "/account/myquotes",
                element: <MyQuotesPage />,
              },
              {
                path: "/account/settings",
                element: <AccountSettingsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "casestudies",
    element: <Navigation />,
    children: [
      { index: true, element: <CaseStudiesPage /> },
      {
        path: "casestudies/:casestudyid",
        element: <CaseStudyPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
    action: clientAction,
    loader: clientLoader,
    children: [
      { index: true, element: <DashIndex /> },
      {
        path: "clients",
        element: <DashClients />,
      },
      {
        path: "clients/:clientId",
        element: <DashClient />,
      },
      {
        path: "clients/:clientId/edit",
        element: <DashClientEdit />,
        loader: clientLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
