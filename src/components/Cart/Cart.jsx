import React, {useState} from "react";
import { CartCallToAction, CartCallToActionButton, CartSection, CartSh3, CartTableHead, CartTitle, CartTotal, CartTotalContainer } from "./Cart.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid, TextDividerSolid2 } from "../../assets/css/custom.styles";

export default function Cart({ cart, setCart }) {
  
const cartTotal = cart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

  return (
    <CartSection>
      <CartTitle>Cart</CartTitle>
      <CartTableHead>
        <div>sku</div>
        <div>sku</div>
        <div>sku</div>
      </CartTableHead>
      {cart.map((item, key) => {
        return <div key={key}>{item.sku}</div>;
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