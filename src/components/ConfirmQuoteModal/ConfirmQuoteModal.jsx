import React, {useContext, useState, useEffect} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CancelButton } from "../../assets/css/custom.styles";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { CartCallToActionButton } from "../Cart/Cart.styles";
import ConfirmTable from "./ConfirmTable";
import { addQuoteFromEndUser } from '../../utils/firebase.js';

export default function ConfirmQuoteModal({ confirm, setConfirm }) {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext);
  const { currentUserInfo, currentUser } = useContext(UserContext);
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const newDate = Date.now().toString();
    setFormData({
      ...formData,
      id: newDate,
    });
  }, [])

  const handleConfirmQuote = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!currentUserInfo) return setMessage("Please Sign In to Send a Quote");
    try {
      await addQuoteFromEndUser(
        currentUserInfo,
        formData,
        cartItems,
        cartTotal,
        cartCount,
      );
    } catch (error) {
      console.log(error);
    }
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
        {currentUser && (
          <ConfirmTable cartItems={cartItems} cartTotal={cartTotal} />
        )}
        {message.length && <div>{message}</div>}
      </ModalBody>
      <ModalFooter>
        <CartCallToActionButton onClick={handleConfirmQuote}>
          Confirm and Send
        </CartCallToActionButton>
      </ModalFooter>
    </Modal>
  );
}