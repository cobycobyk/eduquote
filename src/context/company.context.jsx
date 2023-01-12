import { createContext, useState, useEffect, useContext } from "react";

export const CompanyContext = createContext({
  currentUserCompany: null,
  setCurrentUserCompany: () => null,
});

export const CompanyProvider = ({ children }) => {
  const [currentUserCompany, setCurrentUserCompany] = useState(null);

  const value = { currentUserCompany, setCurrentUserCompany };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
};
