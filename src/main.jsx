import React, { useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
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
import DashIndex from "./routes/DashboardPage/DashIndex/DashIndex";
import DashClients from "./routes/DashboardPage/DashClients/DashClients";
import DashClientEdit from "./routes/DashboardPage/DashClients/DashClientEdit";
import DashQuotes from "./routes/DashboardPage/DashQuotes/DashQuotes";
import DashQuote from "./routes/DashboardPage/DashQuotes/DashQuote";
import DashQuoteEdit from "./routes/DashboardPage/DashQuotes/DashQuoteEdit";
import QuotePage from "./routes/QuotePage/QuotePage";
import QuoteEditPage from "./routes/QuotePage/QuoteEditPage";
import TestPage from "./routes/TestPage/TestPage";
import { UserContext, UserProvider } from "./context/user.context.jsx";
import DashCatalogs from "./routes/DashboardPage/DashCatalogs/DashProducts";
import { ProductsProvider } from "./context/products.context";
import DashClientNew from "./routes/DashboardPage/DashClients/DashClientNew";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cart.context";
import DashQuoteNew from "./routes/DashboardPage/DashQuotes/DashQuoteNew";
import DashCatalogNew from "./routes/DashboardPage/DashCatalogs/DashProductNew";
import DashCatalog from "./routes/DashboardPage/DashCatalogs/DashProduct";
import DashCatalogEdit from "./routes/DashboardPage/DashCatalogs/DashProductEdit";
import DashSettings from "./routes/DashboardPage/DashSettings/DashSettings";
import Footer from "./components/Footer/Footer";
import HowToPage from "./routes/HowToPage/HowToPage";
import PricingPage from "./routes/PricingPage/PricingPage";
import DashClient from "./routes/DashboardPage/DashClients/DashClient";
import MyQuoteEditPage from "./routes/AccountPage/MyQuoteEditPage";
import DashCatalogsSettings from "./routes/DashboardPage/DashCatalogs/DashProductsSettings";
import DashProducts from "./routes/DashboardPage/DashCatalogs/DashProducts";
import DashProductNew from "./routes/DashboardPage/DashCatalogs/DashProductNew";
import DashProduct from "./routes/DashboardPage/DashCatalogs/DashProduct";
import DashProductEdit from "./routes/DashboardPage/DashCatalogs/DashProductEdit";

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <Routes>
      <Route
        element={
          <>
            <>
              <Navigation />
              <Outlet />
            </>
            <Footer />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="howto" element={<HowToPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="casestudies">
          <Route index element={<CaseStudiesPage />} />
          <Route path=":casestudyId" element={<CaseStudyPage />} />
        </Route>
        <Route path="account" element={<AccountPage />}>
          <Route index element={<ProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="myquotes">
            <Route index element={<MyQuotesPage />} />
            <Route path=":quoteId/edit" element={<MyQuoteEditPage />} />
          </Route>
          <Route path="settings" element={<AccountSettingsPage />} />
        </Route>
        <Route path="quote">
          <Route index element={<QuotePage />} />
          <Route path=":quoteId" element={<QuotePage />} />
          <Route path=":quoteId/edit" element={<QuoteEditPage />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <DashboardPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        >
          <Route index element={<DashIndex />} />
          <Route path="clients" element={<DashClients />} />
          <Route
            path="clients/:clientID"
            element={<DashClient setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="clients/:clientID/edit"
            element={<DashClientEdit setCurrentPage={setCurrentPage} />}
          />
          <Route path="clients/new" element={<DashClientNew />} />
          <Route path="quotes" element={<DashQuotes />} />
          <Route path="quotes/new" element={<DashQuoteNew />} />
          <Route
            path="quotes/:quoteId"
            element={<DashQuote setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="quotes/:quoteId/edit"
            element={<DashQuoteEdit setCurrentPage={setCurrentPage} />}
          />
          <Route path="products" element={<DashProducts />} />
          <Route path="products/new" element={<DashProductNew />} />
          {/* <Route path="catalogs/settings" element={<DashCatalogsSettings />} /> */}
          <Route
            path="products/:productId"
            element={<DashProduct setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="products/:productId/edit"
            element={<DashProductEdit setCurrentPage={setCurrentPage} />}
          />
          <Route path="settings" element={<DashSettings />} />
        </Route>
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);