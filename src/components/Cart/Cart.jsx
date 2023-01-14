import React, {useContext} from "react";
import { CartCallToAction, CartCallToActionButton, CartItem, CartItemImg, CartItemName, CartItemSku, CartSection, CartSh3, CartTableCol1, CartTableCol2, CartTableCol3, CartTableCol4, CartTableCol5, CartTableHead, CartTitle, CartTotal, CartTotalContainer } from "./Cart.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid2 } from "../../assets/css/custom.styles";
import { CartContext } from "../../context/cart.context";

export default function Cart({confirm, setConfirm}) {
  const { cartItems, cartTotal, clearItemFromCart } = useContext(CartContext);

  const handleRemoveItem = (cartItem) => {
    clearItemFromCart(cartItem);
  }

  return (
    <React.Fragment>
      <CartSection>
        <CartTitle>Quote Summary</CartTitle>
        {!cartItems.length && <CartTableHead>
          Add an item to start
        </CartTableHead>}
        {cartItems.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <CartItem>
                <CartTableCol1>
                  <CartItemImg src={item.image} alt="item" />
                </CartTableCol1>
                <CartTableCol2>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemSku>{item.sku}</CartItemSku>
                </CartTableCol2>
                <CartTableCol3>x{item.quantity}</CartTableCol3>
                <CartTableCol4>
                  {priceFormatter.format(item.price)}
                </CartTableCol4>
                <CartTableCol5 onClick={() => handleRemoveItem(item)}>
                  X
                </CartTableCol5>
              </CartItem>
            </React.Fragment>
          );
        })}
        <TextDividerSolid2></TextDividerSolid2>
        <CartTotalContainer>
          <CartSh3>Total:</CartSh3>
          <CartTotal>{priceFormatter.format(cartTotal)}</CartTotal>
        </CartTotalContainer>
        {cartItems.length ? (
          <CartCallToAction>
            <CartCallToActionButton onClick={() => setConfirm(true)}>
              Send Quote
            </CartCallToActionButton>
          </CartCallToAction>
        ) : null}
      </CartSection>
    </React.Fragment>
  );
}