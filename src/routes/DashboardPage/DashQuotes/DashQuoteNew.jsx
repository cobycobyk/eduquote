import React,{ useState } from "react";
import Cart from "../../../components/Cart/Cart";
import ProductModal from "../../../components/ProductModal/ProductModal";
import Quote from "../../../components/Quote/Quote";
import { QuoteSectionLeft, QuoteSectionRight } from "../../QuotePage/QuotePage.styles";
import DashQuoteConfirmModal from "./DashQuoteConfirmModal";
import { DQNewContainer } from "./DashQuotes.styles";

export default function DashQuoteNew() {
  const [confirm, setConfirm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleProductClick = (product) => {
    setModalOpen(!modalOpen);
    setModal(product);
  };

  return (
    <React.Fragment>
      <DQNewContainer>
        <QuoteSectionLeft>
          <Quote handleProductClick={handleProductClick} />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <Cart confirm={confirm} setConfirm={setConfirm} />
        </QuoteSectionRight>
      </DQNewContainer>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modal={modal}
        setModal={setModal}
      />
      <DashQuoteConfirmModal confirm={confirm} setConfirm={setConfirm} />
    </React.Fragment>
  );
}