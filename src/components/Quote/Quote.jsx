import React, { useState } from "react";
import {
  AddToQuoteButton,
  QAButton,
  QAInput,
  QuoteAddContainer,
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
import { useOutletContext } from "react-router-dom";

export default function Quote({products, cart, setCart}) {
  const [count, setCount] = useState(1);
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <QuoteSection>
      <QuoteTitle>Build A Quote</QuoteTitle>
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
              return (
                <Tr key={key}>
                  <Th>{product.image}</Th>
                  <Td>{product.name}</Td>
                  <Td>{product.sku}</Td>
                  <Td>{product.category}</Td>
                  <Td>{product.description}</Td>
                  <Td>{priceFormatter.format(product.price)}</Td>
                  <Td>
                    <QuoteAddContainer>
                      <QAButton onClick={() => setCount(count - 1)}>-</QAButton>
                      <QAInput placeholder="1" />
                      <QAButton onClick={() => setCount(count + 1)}>+</QAButton>
                      <AddToQuoteButton onClick={() => addToCart(product)}>Add</AddToQuoteButton>
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
  );
}
