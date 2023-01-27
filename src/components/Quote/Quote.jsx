import React, { useContext, useEffect, useState } from "react";
import {
  AddToQuoteButton,
  FilterBarDropdown,
  FilterBarOption,
  FilterBarOptions,
  QAButton,
  QAInput,
  QuoteAddContainer,
  QuoteFilterBar,
  QuoteSection,
  QuoteTitle,
} from "./Quote.styles";
import {
  DTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../routes/DashboardPage/DashboardPage.styles";
import { ProductsContext } from "../../context/products.context";
import QuoteItem from "./QuoteItem";


export default function Quote({ handleProductClick }) {
  const { products, catalogCategories } = useContext(ProductsContext);
  const [displayedProducts, setDisplayedProducts] = useState([...products]);
  
  const [categorySelection, setCategorySelection] = useState(false);
  const [subCategorySelection, setSubCategorySelection] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  // useEffect(() => {
  //   const filter = () => {
  //     const filterProductsOnCategory = products.filter((product) => {
  //       return (
  //         product?.category.toLowerCase() === categorySelection?.toLowerCase()
  //       );
  //     });
  //     console.log(filterProductsOnCategory);
  //     setDisplayedProducts(filterProductsOnCategory);
  //   };
  //   categorySelection.length && filter();
  // }, [categorySelection]);


  useEffect(() => {
    if (categorySelection.length) {
      const filtered = catalogCategories?.filter(catalog => catalog.name === categorySelection);
      const subs = filtered[0]?.subCategories;
      const filterProductsOnCategory = products.filter((product) => {
        return (
          product?.category.toLowerCase() === categorySelection?.toLowerCase()
        );
      });
      setSubCategories(subs);
      setDisplayedProducts(filterProductsOnCategory);
    }
    if (!categorySelection.length) {
      setDisplayedProducts([...products])
      categorySelection && setSubCategories([])
    }
  }, [categorySelection]);

  const handleChangeCategory = (e) => {
    setCategorySelection(e.target.value)
  };
  const handleChangeSubCategory = (e) => {
    setSubCategorySelection(e.target.value);
  };
  console.log(displayedProducts)
  return (
    <React.Fragment>
      <QuoteSection>
        <QuoteTitle>Build A Quote</QuoteTitle>
        <QuoteFilterBar>
          <FilterBarOptions>
            <FilterBarOption>Filter by Catalog:</FilterBarOption>
            <FilterBarDropdown
              value={categorySelection}
              onChange={handleChangeCategory}
              placeholder="Category Selection"
            >
              <option value="" selected>
                {categorySelection ? categorySelection.name : "All"}
              </option>
              {catalogCategories?.map((cat, key) => {
                return (
                  <option key={key}>
                    {cat.name}
                  </option>
                );
              })}
            </FilterBarDropdown>
            {subCategories.length ? (
              <React.Fragment>
                <FilterBarOption>Sub Catalog:</FilterBarOption>
                <FilterBarDropdown
                  value={subCategorySelection}
                  name="subCategorySelection"
                  onChange={handleChangeSubCategory}
                  id="subCatgeorySelection"
                  placeholder="Sub Category Selection"
                  errorMessage=""
                >
                  <option value="" selected>All</option>
                  {subCategories?.map((cat, key) => {
                    return (
                      <option key={key}>
                        {cat}
                      </option>
                    );
                  })}
                </FilterBarDropdown>
              </React.Fragment>
            ):(null)}
          </FilterBarOptions>
        </QuoteFilterBar>
        <DTable>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>SKU</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Add To Quote</Th>
            </Tr>
          </Thead>
          {displayedProducts?.length ? (
            <Tbody>
              {displayedProducts?.map((product, key) => {
                return <QuoteItem product={product} key={key} />
              })}
            </Tbody>
          ) : (
            <div>No Products</div>
          )}
        </DTable>
      </QuoteSection>
    </React.Fragment>
  );
}
