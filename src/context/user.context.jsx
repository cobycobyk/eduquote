import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getUserInfo } from "../utils/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  currentUserInfo: null,
  setCurrentUserInfo: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const value = { currentUser, setCurrentUser, currentUserInfo };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser) {
      const userInfo = async () => {
        const response = await getUserInfo(currentUser);
        setCurrentUserInfo(response);
      }
      userInfo();
    } else {
      setCurrentUserInfo(null);
    }
  }, [currentUser])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};