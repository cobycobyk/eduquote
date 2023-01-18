import React, {useState, useEffect, useContext} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Bold, CancelButton, HoverOrange, HoverPointer, TextDividerSolid2 } from "../../../assets/css/custom.styles";
import { CartCallToAction, CartCallToActionButton, CartItem, CartItemImg, CartItemName, CartItemSku, CartSection, CartSh3, CartTableCol1, CartTableCol2, CartTableCol3, CartTableCol4, CartTableCol5, CartTitle, CartTotal, CartTotalContainer } from "../../../components/Cart/Cart.styles";
import { CheckoutTable, TableColumn, Tbody, Td, TdImg, Th, Thead, Tr } from "../../../components/ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import * as Icon from "react-feather";
import { CartContext } from "../../../context/cart.context";
import { UserContext } from "../../../context/user.context";
import { updateQuoteFromSalesperson } from "../../../utils/firebase";
import Quote from "../../../components/Quote/Quote";
import { DQNewContainer } from "./DashQuotes.styles";
import { QuoteSectionLeft, QuoteSectionRight } from "../../QuotePage/QuotePage.styles";

export default function DashQuoteEdit({setCurrentPage}) {
  const location = useLocation();
  const quote = location.state?.data;
  const { replaceCartItems, cartItems, cartTotal, cartCount, removeItemToCart, addItemToCart, clearItemFromCart, clearCart } = useContext(CartContext);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    replaceCartItems(quote.cartItems);
    setCurrentPage(`Edit Quote ${quote.id}`)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUserInfo) return setMessage("Please Sign In to Send a Quote");
    await updateQuoteFromSalesperson(
      currentUserInfo,
      quote,
      cartCount,
      cartTotal,
      cartItems,
      currentUserInfo,
    );
    clearCart();
    navigate(`/dashboard/quotes/${quote.id}`, { state: { data: quote } });
  }
  const handleCancel = () => {
    clearCart();
    navigate(`/dashboard/quotes/${quote.id}`, { state: {data: quote}});
  }

  return (
    <React.Fragment>
      <DQNewContainer>
        <QuoteSectionLeft>
          <Quote />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <CartSection>
            <CartTitle>Edited Quote</CartTitle>
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
                Send Quote
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