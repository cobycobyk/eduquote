import React, {useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CancelButton } from "../../../assets/css/custom.styles";
import { CartCallToActionButton } from "../../../components/Cart/Cart.styles";
import { CartContext } from "../../../context/cart.context";
import { UserContext } from "../../../context/user.context";
import { addQuoteFromSalesperson } from "../../../utils/firebase";
import { Formm, SignupInput } from "../../SignupPage/SignupPage.styles";

export default function DashQuoteConfirmModal({confirm, setConfirm}) {
  const { cartTotal, cartCount, cartItems } = useContext(CartContext);
  const { currentUserInfo } = useContext(UserContext);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cartTotal,
    cartCount,
    cartItems,
    recipientEmail: "",
    id: "",
  })

  useEffect(() => {
    const newDate = Date.now().toString();
    setFormData({
      ...formData,
      id: newDate,
    });
  }, [cartItems]);

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (!formData.recipientEmail) return setMessage("Enter Recipient Email");
    console.log('submitted')
    await addQuoteFromSalesperson(currentUserInfo, formData);
    setConfirm(false);
    navigate('/dashboard/quotes');
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
            value={formData.recipientEmail}
            onChange={handleChange}
            type="email"
            name="recipientEmail"
            id="email"
            placeholder="Enter Recipient Email"
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
          {message && <div>{message}</div>}
          <CartCallToActionButton type="submit">
            Confirm and Send
          </CartCallToActionButton>
        </Formm>
      </ModalBody>
    </Modal>
  );
}