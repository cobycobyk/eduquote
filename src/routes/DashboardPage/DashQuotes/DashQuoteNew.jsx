import React,{ useState } from "react";
import Cart from "../../../components/Cart/Cart";
import ConfirmQuoteModal from "../../../components/ConfirmQuoteModal/ConfirmQuoteModal";
import Quote from "../../../components/Quote/Quote";
import { QuoteSectionContainer, QuoteSectionLeft, QuoteSectionRight } from "../../QuotePage/QuotePage.styles";

export default function DashQuoteNew() {
  const [confirm, setConfirm] = useState(false);

  return (
    <React.Fragment>
      <QuoteSectionContainer>
        <QuoteSectionLeft>
          <Quote />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <Cart confirm={confirm} setConfirm={setConfirm} />
        </QuoteSectionRight>
      </QuoteSectionContainer>
      <ConfirmQuoteModal confirm={confirm} setConfirm={setConfirm} />
    </React.Fragment>
  );
}