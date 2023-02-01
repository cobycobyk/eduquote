import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getUserInfo } from "../utils/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  currentUserInfo: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const value = { currentUser, setCurrentUser, currentUserInfo };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        const user2 = createUserDocumentFromAuth(user);
        if (user2) {
          const info = async () => {
            const response = await getUserInfo(user);
            setCurrentUserInfo(response);
          }
          info();
        }
      }
      setCurrentUser(user);
      if (!user) {
        setCurrentUserInfo(null);
      }
    });

    return unsubscribe;
  }, []);


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};