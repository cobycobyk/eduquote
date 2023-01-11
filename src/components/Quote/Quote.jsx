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


export default function Quote({products, cart, setCart, handleProductClick}) {
  const [count, setCount] = useState(1);
  

  const addToCart = (product, qty) => {
    const newItem = {...product, qty}
    console.log(newItem)
    setCart([...cart, newItem]);
  }

  return (
    <React.Fragment>
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
                const [qty, setQty] = useState(1);
                return (
                  <Tr key={key} onClick={() => handleProductClick(product)}>
                    <Th>
                      <img src={product.image} width={54} />
                    </Th>
                    <Td>{product.name}</Td>
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
                          onClick={() => addToCart(product, qty)}
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
