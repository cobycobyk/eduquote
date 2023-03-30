import { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "./user.context";
import { getAllProducts, getProductsCategories } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
  productCategories: false,
  productSubCategories: [],
  productGroups: [],
  addProductCategory: () => {},
  addProductToProducts: () => {},
  updateExistingProduct: () => {},
});

//helper functions
const editProduct = (products, productToUpdate, images) => {
  const index = products.findIndex((product) => product.sku === productToUpdate.sku);
  const pics = products[index].images;
  images?.map((image) => {
    pics.push(image);
  });
  productToUpdate.images = pics
  products.splice(index, 1, productToUpdate);
  console.log(products);
  return products;
};


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

  const addProductCategory = (category) => {
    setProductCategories([...productCategories, category])
  }
  const addProductToProducts = (product) => {
    setProducts([...products, product])
  }
  const updateExistingProduct = (productToUpdate, images) => {
    setProducts(editProduct(products, productToUpdate, images));
  }
  
  const value = {
    products,
    productCategories,
    productSubCategories,
    productGroups,
    addProductCategory,
    addProductToProducts,
    updateExistingProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};