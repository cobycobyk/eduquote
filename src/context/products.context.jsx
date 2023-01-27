import { createContext, useState, useEffect, useContext } from "react";

import {PRODUCTS} from "../components/Quote/items";
import { getCatalogCategories } from "../utils/firebase";
import sortBy from "sort-by";
import { UserContext } from "./user.context";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
  catalogCategories: false,
  catalogSubCategories: [],
  catalogs: [],
});
//helper functions
const getAllSubCategories = (category) => {
  const subs = category?.subCategories.map((subCategory) => {
    return subCategory;
  })
  return subs;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [catalogCategories, setCatalogCategories] = useState([]);
  const [catalogSubCategories, setCatalogSubCategories] = useState([]);
  const [catalogs, setCatalogs] = useState([])
  const { currentUserInfo } = useContext(UserContext);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCatalogCategories();
      setCatalogCategories(categories);
    } 
    getCategories();
  }, []);

  useEffect(() => {
    console.log(currentUserInfo)
  }, [currentUserInfo])

  useEffect(() => {
    const a = []
    catalogCategories.forEach((category) => {
      a.push(getAllSubCategories(category).sort(sortBy("name")))
    });
    setCatalogSubCategories(a.flat(1));
  }, [catalogCategories])
  
  const value = { products, setProducts, catalogCategories, catalogSubCategories, catalogs };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};