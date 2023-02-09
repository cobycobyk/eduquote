import React, { useContext, useEffect, useState } from "react";
import {
  FilterBarDropdown,
  FilterBarOption,
  FilterBarOptions,
  QuoteFilterBar,
  QuoteSection,
  QuoteTitle,
  QuoteTitleDark,
} from "./Quote.styles";
import {
  DMainBG,
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
import { TableCard, TableCardBody, TableContainer, TableTable, TBodyDark, THDark, THeadDark, TRDark } from "../../assets/css/table.styles";
import { TextDividerSolid2Dark } from "../../assets/css/custom.styles";


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
      <DMainBG>
        <QuoteTitleDark>Build A Quote</QuoteTitleDark>
        <QuoteFilterBar>
          <FilterBarOptions>
            <FilterBarOption>Filter by Category:</FilterBarOption>
            <FilterBarDropdown
              value={categorySelection}
              onChange={handleChangeCategory}
              placeholder="Category Selection"
            >
              <option value="">{"All"}</option>
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
              <option value="">{"All"}</option>
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
                  <option value="">{"All"}</option>
                  {productGroups?.map((group, key) => {
                    return <option key={key}>{group}</option>;
                  })}
                </FilterBarDropdown>
              </React.Fragment>
            ) : null}
          </FilterBarOptions>
        </QuoteFilterBar>
        <TextDividerSolid2Dark />
        <TableCard>
          <TableCardBody>
            <TableContainer>
              <TableTable>
                <THeadDark>
                  <TRDark>
                    <THDark>Image</THDark>
                    <THDark>Name</THDark>
                    <THDark>SKU</THDark>
                    <THDark>Category</THDark>
                    <THDark>Sub Category</THDark>
                    <THDark>Group</THDark>
                    <THDark>Description</THDark>
                    <THDark>Price</THDark>
                    <THDark>Add To Quote</THDark>
                  </TRDark>
                </THeadDark>
                {displayedProducts?.length ? (
                  <TBodyDark>
                    {displayedProducts?.map((product, key) => {
                      return (
                        <QuoteItem
                          product={product}
                          key={key}
                          handleProductClick={handleProductClick}
                        />
                      );
                    })}
                  </TBodyDark>
                ) : (
                  <div>No Products</div>
                )}
              </TableTable>
            </TableContainer>
          </TableCardBody>
        </TableCard>
      </DMainBG>
    </React.Fragment>
  );
}
