import React, {useContext} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CancelButton } from "../../assets/css/custom.styles";
import { CartContext } from "../../context/cart.context";
import { CartCallToActionButton } from "../Cart/Cart.styles";
import ConfirmTable from "./ConfirmTable";

const handleConfirmQuote = () => {
  console.log('submitted')
}

export default function ConfirmQuoteModal({ confirm, setConfirm }) {
  const { cartItems, cartTotal } = useContext(CartContext);
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
        <ConfirmTable cartItems={cartItems} cartTotal={cartTotal} />
        
      </ModalBody>
      <ModalFooter>
        <CartCallToActionButton onClick={handleConfirmQuote} >Confirm and Send</CartCallToActionButton>
      </ModalFooter>
    </Modal>
  );
}