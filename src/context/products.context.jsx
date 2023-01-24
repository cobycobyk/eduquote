import { createContext, useState, useEffect } from "react";

import {PRODUCTS} from "../components/Quote/items";
import { getCatalogCategories } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
  catalogCategories: false,
  catalogSubCategories: [],
});
//helper functions
const getAllSubCategories = (category) => {
  const subs = category?.subCategories.map((subCategory) => {
    return subCategory?.name;
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
    // console.log(catalogCategories[0])
    const a = []
    catalogCategories.forEach((category) => {
      a.push(getAllSubCategories(category))
    });
    setCatalogSubCategories(a.flat(1));
    // console.log(getAllSubCategories(catalogCategories[0]))
    // setCatalogSubCategories(catalogCategories.map((sub) => sub.name))
  }, [catalogCategories])
  
  const value = { products, catalogCategories, catalogSubCategories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};