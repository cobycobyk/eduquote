import { useState } from "react";
import { Outlet } from "react-router-dom";

export const UserContext = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return <Outlet context={[currentUser, setCurrentUser]} />;
}