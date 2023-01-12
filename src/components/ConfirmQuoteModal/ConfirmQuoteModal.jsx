import React, {useContext} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CartContext } from "../../context/cart.context";
import { CartCallToActionButton } from "../Cart/Cart.styles";
import ConfirmTable from "./ConfirmTable";

export default function ConfirmQuoteModal({ confirm, setConfirm }) {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <Modal isOpen={confirm} size="xl" fullscreen>
      <ModalHeader toggle={() => setConfirm(false)}>
        Confirm Quote
      </ModalHeader>
      <ModalBody>
        <ConfirmTable cartItems={cartItems} cartTotal={cartTotal}/>
      </ModalBody>
      <ModalFooter>
        <CartCallToActionButton>Confirm and Send</CartCallToActionButton>
      </ModalFooter>
    </Modal>
  )
}