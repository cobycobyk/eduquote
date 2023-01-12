import React, {useContext, useState} from "react";
import { CartCallToAction, CartCallToActionButton, CartItem, CartItemImg, CartItemMiddle, CartItemRight, CartQty, CartSection, CartSh3, CartTableHead, CartTitle, CartTotal, CartTotalContainer } from "./Cart.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid2 } from "../../assets/css/custom.styles";
import e3 from '../../assets/images/quote/roboe3.png'
import { CartContext } from "../../context/cart.context";

export default function Cart({confirm, setConfirm}) {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CartSection>
      <CartTitle>Quote Summary</CartTitle>
      <CartTableHead>
        <div>Item</div>
        <div>Sku</div>
        <div>Price</div>
        <div>Qty</div>
      </CartTableHead>
      {cartItems.map((item, key) => {
        return (
          <CartItem key={key}>
            <CartItemImg src={item.image} alt="item" />
            <CartItemMiddle>
              <div>{item.sku}</div>
              <div>{item.sku}</div>
            </CartItemMiddle>
            <CartItemRight>
              {priceFormatter.format(item.price)}
            </CartItemRight>
            <CartQty>{item.quantity}</CartQty>
          </CartItem>
        );
      })}
      <TextDividerSolid2></TextDividerSolid2>
      <CartTotalContainer>
        <CartSh3>Total:</CartSh3>
        <CartTotal>{priceFormatter.format(cartTotal)}</CartTotal>
      </CartTotalContainer>
      {cartItems.length ? (
        <CartCallToAction>
          <CartCallToActionButton onClick={() => setConfirm(true)}>Send Quote</CartCallToActionButton>
        </CartCallToAction>
      ): (
          null
      )}
    </CartSection>
  );
}