import { createContext, useState, useEffect } from "react";

import {PRODUCTS} from "../components/Quote/items";
import { getCatalogCategories } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
  catalogCategories: false,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [catalogCategories, setCatalogCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCatalogCategories();
      setCatalogCategories(categories);
    } 
    getCategories();
    console.log(catalogCategories)
  }, []);
  
  const value = { products, catalogCategories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};