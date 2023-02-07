import React, { useContext } from "react";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { Td, TdImg, Th, Tr } from "./ConfirmQuoteModal.styles";
import * as Icon from "react-feather";
import { CartContext } from "../../context/cart.context";
import { HoverOrange, HoverPointer } from "../../assets/css/custom.styles";

export default function ConfirmTableItem({ cartItem }) {
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);

  return (
    <React.Fragment>
      <Tr>
        <Th>
          <TdImg src={cartItem.images[0]} alt="product image" />
        </Th>
        <Td>{cartItem.name}</Td>
        <Td>{cartItem.sku}</Td>
        <Td>
          <HoverOrange>
            <Icon.ChevronLeft onClick={() => removeItemToCart(cartItem, 1)} />
          </HoverOrange>
          {cartItem.quantity}
          <HoverOrange>
            <Icon.ChevronRight onClick={() => addItemToCart(cartItem, 1)} />
          </HoverOrange>
        </Td>
        <Td>{priceFormatter.format(cartItem.price)}</Td>
        <Td>{priceFormatter.format(cartItem.price * cartItem.quantity)}</Td>
        <Td onClick={() => clearItemFromCart(cartItem)}>
          <HoverPointer>X</HoverPointer>
        </Td>
      </Tr>
    </React.Fragment>
  );
}