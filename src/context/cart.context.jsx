import { useState } from "react";
import { Outlet } from "react-router-dom";

export const CartContext = () => {
  const [cartItems, setCartItems] = useState([]);

  return <Outlet context={[cartItems, setCartItems]} />;
};
