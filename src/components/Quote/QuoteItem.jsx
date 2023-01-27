import React, {useContext, useState} from "react"
import { CartContext } from "../../context/cart.context";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { Td, Th, Tr } from "../ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { AddToQuoteButton, QAButton, QAInput, QuoteAddContainer } from "./Quote.styles";


export default function QuoteItem({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  return (
    <Tr>
      <Th>
        <img src={product.image} width={54} />
      </Th>
      <Td onClick={() => handleProductClick(product)}>{product.name}</Td>
      <Td>{product.sku}</Td>
      <Td>{product.category}</Td>
      <Td>{product.description}</Td>
      <Td>{priceFormatter.format(product.price)}</Td>
      <Td>
        <QuoteAddContainer>
          <QAButton onClick={() => setQty(qty - 1)}>-</QAButton>
          <QAInput value={qty} onChange={(e) => setQty(e.target.value)} />
          <QAButton onClick={() => setQty(qty + 1)}>+</QAButton>
          <AddToQuoteButton onClick={() => addItemToCart(product, qty)}>
            Add
          </AddToQuoteButton>
        </QuoteAddContainer>
      </Td>
    </Tr>
  );
}