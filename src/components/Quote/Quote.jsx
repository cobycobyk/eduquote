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
import { UserContext } from "../../context/user.context";


export default function Quote({ handleProductClick }) {
  const { products, productCategories, productSubCategories, productGroups } = useContext(ProductsContext);
  const [displayedProducts, setDisplayedProducts] = useState([...products]);
  const { currentUserInfo } = useContext(UserContext);
  const [categorySelection, setCategorySelection] = useState(false);
  const [subCategorySelection, setSubCategorySelection] = useState(false);
  const [groupSelection, setGroupSelection] = useState(false);

  useEffect(() => {
    if (categorySelection.length) {
      const filtered = products.filter(product => product.category === categorySelection);
      setDisplayedProducts(filtered)
      if (subCategorySelection.length) {
        const subFilter = filtered.filter(
          (product) => product.subCategory === subCategorySelection
        );
        setDisplayedProducts(subFilter);
        if (groupSelection.length) {
          const groupfilter = subFilter.filter(
            (product) => product.group === groupSelection
          );
          setDisplayedProducts(groupfilter);
        }
      }
    }
    if (!categorySelection.length) {
      setDisplayedProducts([...products])
      setSubCategorySelection(false);
      setGroupSelection(false);
    }
  }, [categorySelection, subCategorySelection, groupSelection])

  useEffect(() => {
    setGroupSelection(false);
  }, [categorySelection, subCategorySelection])
  useEffect(() => {
    setSubCategorySelection(false);
    setGroupSelection(false);
  }, [categorySelection])

  const handleChangeCategory = (e) => {
    setCategorySelection(e.target.value)
  };
  const handleChangeSubCategory = (e) => {
    setSubCategorySelection(e.target.value);
  };
  const handleChangeGroup = (e) => {
    setGroupSelection(e.target.value);
  };
  
  return (
    <React.Fragment>
      <QuoteSection>
        <QuoteTitle>Build A Quote</QuoteTitle>
        <QuoteFilterBar>
          <FilterBarOptions>
            <FilterBarOption>Filter by Category:</FilterBarOption>
            <FilterBarDropdown
              value={categorySelection}
              onChange={handleChangeCategory}
              placeholder="Category Selection"
            >
              <option value="" selected>
                {"All"}
              </option>
              {productCategories?.map((cat, key) => {
                return <option key={key}>{cat}</option>;
              })}
            </FilterBarDropdown>
            <FilterBarOption>Filter Sub Category:</FilterBarOption>
            <FilterBarDropdown
              value={subCategorySelection}
              onChange={handleChangeSubCategory}
              placeholder="Sub Category Selection"
            >
              <option value="" selected>
                {"All"}
              </option>
              {productSubCategories?.map((subcat, key) => {
                return <option key={key}>{subcat}</option>;
              })}
            </FilterBarDropdown>
            {productSubCategories.length ? (
              <React.Fragment>
                <FilterBarOption>Filter By Group:</FilterBarOption>
                <FilterBarDropdown
                  value={groupSelection}
                  name="groupSelection"
                  onChange={handleChangeGroup}
                  id="groupSelection"
                  placeholder="Group Selection"
                  errorMessage=""
                >
                  <option value="" selected>
                    {"All"}
                  </option>
                  {productGroups?.map((group, key) => {
                    return <option key={key}>{group}</option>;
                  })}
                </FilterBarDropdown>
              </React.Fragment>
            ) : null}
          </FilterBarOptions>
        </QuoteFilterBar>
        <DTable>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>SKU</Th>
              <Th>Category</Th>
              <Th>Sub Category</Th>
              <Th>Group</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Add To Quote</Th>
            </Tr>
          </Thead>
          {displayedProducts?.length ? (
            <Tbody>
              {displayedProducts?.map((product, key) => {
                return (
                  <QuoteItem
                    product={product}
                    key={key}
                    handleProductClick={handleProductClick}
                  />
                );
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
