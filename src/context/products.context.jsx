import { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "./user.context";
import { getAllProducts, getProductsCategories } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
  productCategories: false,
  productSubCategories: [],
  productGroups: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [productSubCategories, setProductSubCategories] = useState([]);
  const [productGroups, setProductGroups] = useState([]);
  const { currentUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (currentUserInfo) {
      const getCategories = async () => {
        const categories = await getProductsCategories(currentUserInfo);
        setProductCategories(categories.categories);
        setProductSubCategories(categories.subCategories);
        setProductGroups(categories.groups);
      };
      const getProducts = async () => {
        const items = await getAllProducts(currentUserInfo.company);
        setProducts(items);
      }
      getCategories();
      getProducts();
    } else {
      setProductCategories([]);
    }
  }, [currentUserInfo]);
  
  const value = {
    products,
    productCategories,
    productSubCategories,
    productGroups,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};