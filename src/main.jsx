import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import {
  action as clientAction,
  loader as clientLoader,
  quoteLoader,
} from "./routes/DashboardPage/DashboardPage";
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
import DashClients from "./routes/DashboardPage/DashClients/DashClients";
import DashClientEdit from "./routes/DashboardPage/DashClients/DashClientEdit";
import DashClient from "./routes/DashboardPage/DashClients/DashClient";
import Index from "./routes";
import DashQuotes from "./routes/DashboardPage/DashQuotes/DashQuotes";
import DashQuote from "./routes/DashboardPage/DashQuotes/DashQuote";
import DashQuoteEdit from "./routes/DashboardPage/DashQuotes/DashQuoteEdit";
import QuotePage from "./routes/QuotePage/QuotePage";
import QuoteEditPage from "./routes/QuotePage/QuoteEditPage";
import TestPage from "./routes/TestPage/TestPage";
import TestParent from "./routes/TestPage/TestParent";
import { UserContext } from "./context/user.context.jsx";
import DashCatalogs from "./routes/DashboardPage/DashCatalogs/DashCatalogs";
import { ProductsContext } from "./context/products.context";
import DashClientNew from "./routes/DashboardPage/DashClients/DashClientNew";

const NavBarWrapper = () => {
  const [currentUser, setCurrentUser] = useOutletContext();
  return (
    <>
      <Navigation />
      <Outlet context={useOutletContext()} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserContext />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NavBarWrapper />,
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
            path: "test",
            element: <TestPage />,
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
          {
            path: "casestudies",
            element: <CaseStudiesPage />,
            children: [
              {
                path: "casestudies/:casestudyid",
                element: <CaseStudyPage />,
              },
            ],
          },
          {
            path: "quote",
            element: <ProductsContext />,
            children: [
              { index: true, element: <QuotePage /> },
              {
                path: "quote/:quoteId",
                element: <QuotePage />,
              },
              {
                path: "quote/:quoteId/edit",
                element: <QuoteEditPage />,
              },
            ],
          },
          {
            path: "dashboard",
            element: <DashboardPage />,
            action: clientAction,
            children: [
              { index: true, element: <DashIndex /> },
              {
                path: "clients",
                element: <DashClients />,
              },
              {
                path: "client/new",
                element: <DashClientNew />,
                loader: clientLoader,
              },
              {
                path: "clients/:clientId",
                element: <DashClient />,
              },
              {
                path: "clients/:clientId/edit",
                element: <DashClientEdit />,
                loader: clientLoader,
              },
              {
                path: "quotes",
                element: <DashQuotes />,
                loader: quoteLoader,
              },
              {
                path: "quotes/:quoteId",
                element: <DashQuote />,
              },
              {
                path: "quotes/:quoteId/edit",
                element: <DashQuoteEdit />,
                loader: quoteLoader,
              },
              {
                path: "catalogs",
                element: <DashCatalogs />,
                loader: quoteLoader,
              },
              {
                path: "catalogs/:catalogId",
                element: <DashQuote />,
              },
              {
                path: "catalogs/:catalogId/edit",
                element: <DashQuoteEdit />,
                loader: quoteLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
