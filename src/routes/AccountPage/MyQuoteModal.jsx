import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Bold, CancelButton } from "../../assets/css/custom.styles";
import { CartCallToActionButton } from "../../components/Cart/Cart.styles";
import { CheckoutTable, TableColumn, TdImg } from "../../components/ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { Tbody, Td, Th, Thead, Tr } from "../DashboardPage/DashboardPage.styles";

export default function MyQuoteModal({ confirm, setConfirm, quote}) {
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const cartItems = quote.cartItems;
  const cartTotal = quote.cartTotal;

  const handleClick = () => {
    navigate(`/account/myquotes/${quote.id}/edit`, {
      state: { data: quote },
    });
  };

  return (
    <Modal isOpen={confirm} size="xl" fullscreen>
      <ModalHeader
        toggle={() => setConfirm(false)}
        close={
          <CancelButton onClick={() => setConfirm(false)}>Close</CancelButton>
        }
      >
        Confirm Quote
      </ModalHeader>
      <ModalBody>
        <TableColumn>
          <CheckoutTable>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Name</Th>
                <Th>Sku</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((cartItem, key) => (
                <Tr>
                  <Th>
                    <TdImg src={cartItem.image} alt="product image" />
                  </Th>
                  <Td>{cartItem.name}</Td>
                  <Td>{cartItem.sku}</Td>
                  <Td>
                    {cartItem.quantity}
                  </Td>
                  <Td>{priceFormatter.format(cartItem.price)}</Td>
                  <Td>
                    {priceFormatter.format(cartItem.price * cartItem.quantity)}
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Th></Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th></Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>Total:</Td>
                <Td>
                  <Bold>{priceFormatter.format(cartTotal)}</Bold>
                </Td>
              </Tr>
            </Tbody>
          </CheckoutTable>
        </TableColumn>
        {message.length && <div>{message}</div>}
      </ModalBody>
      <ModalFooter>
        <CartCallToActionButton onClick={handleClick}>
          Edit
        </CartCallToActionButton>
      </ModalFooter>
    </Modal>
  );
}
