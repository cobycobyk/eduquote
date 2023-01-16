import React, {useContext, useState} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CancelButton } from "../../../assets/css/custom.styles";
import { CartCallToActionButton } from "../../../components/Cart/Cart.styles";
import { CartContext } from "../../../context/cart.context";
import { Formm, SignupInput } from "../../SignupPage/SignupPage.styles";

export default function DashQuoteConfirmModal({confirm, setConfirm}) {
  const { cartTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({})

  const handleConfirm = () => {
    setConfirm(false);
    console.log('confirmed')
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Modal isOpen={confirm} centered={true}>
      <ModalHeader
        toggle={() => setConfirm(false)}
        close={
          <CancelButton onClick={() => setConfirm(false)}>Exit</CancelButton>
        }
      >
        Send New Quote
      </ModalHeader>
      <ModalBody>
        <Formm onSubmit={handleConfirm}>
          <SignupInput
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            errorMessage=""
            validate={{
              required: {
                value: true,
                errorMessage: "Please enter your email",
              },
              pattern: {
                value: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                errorMessage: "E-Mail is not valid!",
              },
            }}
          />
          <CartCallToActionButton type="submit">
            Confirm and Send
          </CartCallToActionButton>
        </Formm>
      </ModalBody>
    </Modal>
  );
}