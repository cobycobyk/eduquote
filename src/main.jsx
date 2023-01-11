import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
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
import { UserContext, UserProvider } from "./context/user.context.jsx";
import DashCatalogs from "./routes/DashboardPage/DashCatalogs/DashCatalogs";
import { ProductsContext, ProductsProvider } from "./context/products.context";
import DashClientNew from "./routes/DashboardPage/DashClients/DashClientNew";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cart.context";

function App() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navigation />
            <Outlet />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="casestudies">
          <Route index element={<CaseStudiesPage />} />
          <Route path=":casestudyId" element={<CaseStudyPage />} />
        </Route>
        <Route path="account">
          <Route index element={<AccountPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="myquotes" element={<MyQuotesPage />} />
          <Route path="settings" element={<AccountSettingsPage />} />
        </Route>
        <Route path="quote" >
          <Route index element={<QuotePage />} />
          <Route path=":quoteId" element={<QuotePage />} />
          <Route path=":quoteId/edit" element={<QuoteEditPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

const container = document.getElementById('root');
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

// const NavBarWrapper = () => {
//   const [currentUser, setCurrentUser] = useOutletContext();
//   return (
//     <>
//       <Navigation />
//       <Outlet context={useOutletContext()} />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserContext />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <NavBarWrapper />,
//         children: [
//           {
//             path: "quote",
//             element: <ProductsContext />,
//             children: [
//               { index: true, element: <QuotePage /> },
//               {
//                 path: "quote/:quoteId",
//                 element: <QuotePage />,
//               },
//               {
//                 path: "quote/:quoteId/edit",
//                 element: <QuoteEditPage />,
//               },
//             ],
//           },
//           {
//             path: "dashboard",
//             element: <DashboardPage />,
//             action: clientAction,
//             children: [
//               { index: true, element: <DashIndex /> },
//               {
//                 path: "clients",
//                 element: <DashClients />,
//               },
//               {
//                 path: "client/new",
//                 element: <DashClientNew />,
//                 loader: clientLoader,
//               },
//               {
//                 path: "clients/:clientId",
//                 element: <DashClient />,
//               },
//               {
//                 path: "clients/:clientId/edit",
//                 element: <DashClientEdit />,
//                 loader: clientLoader,
//               },
//               {
//                 path: "quotes",
//                 element: <DashQuotes />,
//                 loader: quoteLoader,
//               },
//               {
//                 path: "quotes/:quoteId",
//                 element: <DashQuote />,
//               },
//               {
//                 path: "quotes/:quoteId/edit",
//                 element: <DashQuoteEdit />,
//                 loader: quoteLoader,
//               },
//               {
//                 path: "catalogs",
//                 element: <DashCatalogs />,
//                 loader: quoteLoader,
//               },
//               {
//                 path: "catalogs/:catalogId",
//                 element: <DashQuote />,
//               },
//               {
//                 path: "catalogs/:catalogId/edit",
//                 element: <DashQuoteEdit />,
//                 loader: quoteLoader,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


