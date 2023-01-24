import React,{ useState } from "react";
import Cart from "../../../components/Cart/Cart";
import Quote from "../../../components/Quote/Quote";
import { QuoteSectionLeft, QuoteSectionRight } from "../../QuotePage/QuotePage.styles";
import DashQuoteConfirmModal from "./DashQuoteConfirmModal";
import { DQNewContainer } from "./DashQuotes.styles";

export default function DashQuoteNew() {
  const [confirm, setConfirm] = useState(false);

  return (
    <React.Fragment>
      <DQNewContainer>
        <QuoteSectionLeft>
          <Quote />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <Cart confirm={confirm} setConfirm={setConfirm} />
        </QuoteSectionRight>
      </DQNewContainer>
      <DashQuoteConfirmModal confirm={confirm} setConfirm={setConfirm} />
    </React.Fragment>
  );
}