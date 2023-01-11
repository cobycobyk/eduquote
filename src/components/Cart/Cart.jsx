import React, {useState} from "react";
import { CartCallToAction, CartCallToActionButton, CartItem, CartItemImg, CartItemMiddle, CartItemRight, CartSection, CartSh3, CartTableHead, CartTitle, CartTotal, CartTotalContainer } from "./Cart.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid2 } from "../../assets/css/custom.styles";
import e3 from '../../assets/images/quote/roboe3.png'

export default function Cart({ cart, setCart }) {
  
const cartTotal = cart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

  return (
    <CartSection>
      <CartTitle>Cart</CartTitle>
      <CartTableHead>
        <div>Item</div>
        <div>sku</div>
        <div>price</div>
      </CartTableHead>
      {cart.map((item, key) => {
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
          </CartItem>
        );
      })}
      <TextDividerSolid2></TextDividerSolid2>
      <hr />
      <CartTotalContainer>
        <CartSh3>Total:</CartSh3>
        <CartTotal>{priceFormatter.format(cartTotal)}</CartTotal>
      </CartTotalContainer>
      {cart.length ? (
        <CartCallToAction>
          <CartCallToActionButton>Send Quote</CartCallToActionButton>
        </CartCallToAction>
      ): (
          null
      )}
    </CartSection>
  );
}