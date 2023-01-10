import { useState } from "react";
import { Outlet } from "react-router-dom";
import { items } from "../components/Quote/items";

export const ProductsContext = () => {
  const [products, setProducts] = useState(items);

  return <Outlet context={[products, setProducts]} />;
};
