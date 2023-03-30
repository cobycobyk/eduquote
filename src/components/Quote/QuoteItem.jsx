import React, {useContext, useState, useEffect} from "react"
import { TDDark, TDDarkInside, THDark, TRDark } from "../../assets/css/table.styles";
import { CartContext } from "../../context/cart.context";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { CartThumbnail } from "../Cart/Cart.styles";
import { Td, Th, Tr } from "../ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { AddToQuoteButton, QAButton, QAButtonDark, QAInput, QuoteAddContainer } from "./Quote.styles";


export default function QuoteItem({ product, handleProductClick }) {
  const { addItemToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  return (
    <TRDark>
      <TDDark>
        <CartThumbnail
          onClick={() => handleProductClick(product)}
          src={product.images ? product.images[0] : ""}
          width={54}
        />
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        {product.name}
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>{product.sku}</TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        {product.category}
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        {product.subCategory}
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        {product.group}
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        <TDDarkInside>{product.description}</TDDarkInside>
      </TDDark>
      <TDDark onClick={() => handleProductClick(product)}>
        {priceFormatter.format(product.price)}
      </TDDark>
      <TDDark>
        <QuoteAddContainer>
          <QAButtonDark onClick={() => setQty(qty - 1)}>-</QAButtonDark>
          <QAInput value={qty} onChange={(e) => setQty(e.target.value)} />
          <QAButtonDark onClick={() => setQty(qty + 1)}>+</QAButtonDark>
          <AddToQuoteButton onClick={() => addItemToCart(product, qty)}>
            Add
          </AddToQuoteButton>
        </QuoteAddContainer>
      </TDDark>
    </TRDark>
  );
}