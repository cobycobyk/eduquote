import { createContext, useState, useEffect } from "react";

import {PRODUCTS} from "../components/Quote/items";
import { getCatalogCategories } from "../utils/firebase";
import sortBy from "sort-by";

export const ProductsContext = createContext({
  products: [],
  catalogCategories: false,
  catalogSubCategories: [],
});
//helper functions
const getAllSubCategories = (category) => {
  const subs = category?.subCategories.map((subCategory) => {
    return subCategory;
  })
  return subs;
}

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [catalogCategories, setCatalogCategories] = useState([]);
  const [catalogSubCategories, setCatalogSubCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCatalogCategories();
      setCatalogCategories(categories);
    } 
    getCategories();
  }, []);

  useEffect(() => {
    const a = []
    catalogCategories.forEach((category) => {
      a.push(getAllSubCategories(category).sort(sortBy("name")))
    });
    setCatalogSubCategories(a.flat(1));
  }, [catalogCategories])
  
  const value = { products, catalogCategories, catalogSubCategories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};