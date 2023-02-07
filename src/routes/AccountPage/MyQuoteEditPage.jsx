import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Icon from "react-feather";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { DQNewContainer } from "../DashboardPage/DashQuotes/DashQuotes.styles";
import { QuoteSectionLeft, QuoteSectionRight } from "../QuotePage/QuotePage.styles";
import Quote from "../../components/Quote/Quote";
import { CartCallToAction, CartCallToActionButton, CartItem, CartItemImg, CartItemName, CartItemSku, CartSection, CartSh3, CartTableCol1, CartTableCol2, CartTableCol3, CartTableCol4, CartTableCol5, CartTitle, CartTotal, CartTotalContainer } from "../../components/Cart/Cart.styles";
import { CancelButton, HoverOrange, TextDividerSolid2 } from "../../assets/css/custom.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { updateQuoteFromEndUser } from "../../utils/firebase";

export default function MyQuoteEditPage() {
  const location = useLocation();
  const quote = location.state?.data;
  const {
    replaceCartItems,
    cartItems,
    cartTotal,
    cartCount,
    removeItemToCart,
    addItemToCart,
    clearItemFromCart,
    clearCart,
  } = useContext(CartContext);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    replaceCartItems(quote.cartItems);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUserInfo) return setMessage("Please Sign In to edit Quote");
    await updateQuoteFromEndUser(
      currentUserInfo,
      quote,
      cartCount,
      cartTotal,
      cartItems,
    );
    clearCart();
    navigate(`/account/myquotes`);
  };
  const handleCancel = () => {
    clearCart();
    navigate(`/account/myquotes`);
  };

  return (
    <React.Fragment>
      <DQNewContainer>
        <QuoteSectionLeft>
          <Quote />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <CartSection>
            <CartTitle>Edit Quote {quote.id}</CartTitle>
            {cartItems.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <CartItem>
                    <CartTableCol1>
                      <CartItemImg src={item?.images?.length ? item.images[0] : ""} alt="item" />
                    </CartTableCol1>
                    <CartTableCol2>
                      <CartItemName>{item.name}</CartItemName>
                      <CartItemSku>{item.sku}</CartItemSku>
                    </CartTableCol2>
                    <CartTableCol3>
                      <HoverOrange>
                        <Icon.ChevronLeft
                          onClick={() => removeItemToCart(item, 1)}
                        />
                      </HoverOrange>
                      x{item.quantity}
                      <HoverOrange>
                        <Icon.ChevronRight
                          onClick={() => addItemToCart(item, 1)}
                        />
                      </HoverOrange>
                    </CartTableCol3>
                    <CartTableCol4>
                      {priceFormatter.format(item.price)}
                    </CartTableCol4>
                    <CartTableCol5 onClick={() => clearItemFromCart(item)}>
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
            <CartCallToAction>
              <CartCallToActionButton onClick={handleSubmit}>
                Save and Exit
              </CartCallToActionButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </CartCallToAction>
          </CartSection>
          {message && <div>{message}</div>}
        </QuoteSectionRight>
      </DQNewContainer>
    </React.Fragment>
  );
}
