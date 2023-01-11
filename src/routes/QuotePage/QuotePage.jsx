import React, { useState} from "react"
import Cart from "../../components/Cart/Cart"
import Quote from "../../components/Quote/Quote"
import { QuoteSectionContainer, QuoteSectionLeft, QuoteSectionRight } from "./QuotePage.styles"
import ProductModal from "../../components/ProductModal/ProductModal";


export default function QuotePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);

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
          <Cart />
        </QuoteSectionRight>
      </QuoteSectionContainer>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modal={modal}
        setModal={setModal}
      />
    </React.Fragment>
  );
}