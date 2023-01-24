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
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { CartContext } from "../../context/cart.context";
import { ProductsContext } from "../../context/products.context";


export default function Quote({ handleProductClick }) {
  const { products, catalogCategories } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);
  const [categories, setCategories] = useState(false);
  const [categorySelection, setCategorySelection] = useState(false);
  const [subCategorySelection, setSubCategorySelection] = useState(false);
  const [subCategories, setSubCategories] = useState(false);

  useEffect(() => {
    const cats = catalogCategories.map((cat) => {
      return cat.name;
    })
    catalogCategories && setCategories(cats);
  }, [])

  useEffect(() => {
    const setSubcats = () => {
      catalogCategories.filter(catalog => {
        if (catalog.name === categorySelection) {
          setSubCategories(catalog.subCategories.map((sub) => sub.name))
        };
      });
    }
    categorySelection && setSubcats();
  }, [categorySelection])

  const handleChangeCategory = (e) => {
    setCategorySelection(e.target.value);
  }
  const handleChangeSubCategory = (e) => {
    console.log(e.target.value)
    setSubCategorySelection(e.target.value);
  }

  return (
    <React.Fragment>
      <QuoteSection>
        <QuoteTitle>Build A Quote</QuoteTitle>
        <QuoteFilterBar>
          <FilterBarOptions>
            <FilterBarOption>
              Catalog:
            </FilterBarOption>
            <FilterBarDropdown
              onChange={handleChangeCategory}
            >
              {categories && categories?.map((category, key) => {
                return <option value={category} key={key}>{category}</option>
              })}
            </FilterBarDropdown>
            {categorySelection && 
              <React.Fragment>
                <FilterBarOption>
                  Sub Catalog:
                </FilterBarOption>
                <FilterBarDropdown
                  onChange={handleChangeSubCategory}
                >
                  {subCategories && subCategories?.map((subCategory, key) => {
                    return <option value={subCategory} key={key}>{subCategory}</option>
                  })}
                </FilterBarDropdown>
              </React.Fragment>
            }
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
          {products?.length ? (
            <Tbody>
              {products?.map((product, key) => {
                const [qty, setQty] = useState(1);
                return (
                  <Tr key={key}>
                    <Th>
                      <img src={product.image} width={54} />
                    </Th>
                    <Td onClick={() => handleProductClick(product)}>
                      {product.name}
                    </Td>
                    <Td>{product.sku}</Td>
                    <Td>{product.category}</Td>
                    <Td>{product.description}</Td>
                    <Td>{priceFormatter.format(product.price)}</Td>
                    <Td>
                      <QuoteAddContainer>
                        <QAButton onClick={() => setQty(qty - 1)}>-</QAButton>
                        <QAInput
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        />
                        <QAButton onClick={() => setQty(qty + 1)}>+</QAButton>
                        <AddToQuoteButton
                          onClick={() => addItemToCart(product, qty)}
                        >
                          Add
                        </AddToQuoteButton>
                      </QuoteAddContainer>
                    </Td>
                  </Tr>
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
