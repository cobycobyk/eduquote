import React, { useState} from "react"
import Cart from "../../components/Cart/Cart"
import Quote from "../../components/Quote/Quote"
import { QuoteSectionContainer, QuoteSectionLeft, QuoteSectionRight } from "./QuotePage.styles"
import ProductModal from "../../components/ProductModal/ProductModal";
import ConfirmQuoteModal from "../../components/ConfirmQuoteModal/ConfirmQuoteModal";


export default function QuotePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleProductClick = (product) => {
    setModalOpen(!modalOpen);
    setModal(product);
  };

  return (
    <React.Fragment>
      <QuoteSectionContainer>
        <QuoteSectionLeft>
          <Quote
            handleProductClick={handleProductClick}
          />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <Cart confirm={confirm} setConfirm={setConfirm}/>
        </QuoteSectionRight>
      </QuoteSectionContainer>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modal={modal}
        setModal={setModal}
      />
      <ConfirmQuoteModal
        confirm={confirm}
        setConfirm={setConfirm}
      />
    </React.Fragment>
  );
}