import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChangedListener } from "../utils/firebase";

export const UserContext = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [])

  return <Outlet context={[currentUser, setCurrentUser]} />;
}