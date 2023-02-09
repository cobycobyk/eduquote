import React, {useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Bold, BoldDark } from "../../../assets/css/custom.styles";
import { CheckoutTable, TableColumn, TdImg } from "../../../components/ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { CartCallToActionButton } from "../../../components/Cart/Cart.styles";
import { TableCard, TableCardBody, TableContainer, TableTable, TBodyDark, TDDark, THDark, THeadDark, TRDark } from "../../../assets/css/table.styles";
import { RegisterButtonDark } from "../../SignupPage/SignupPage.styles";

export default function DashQuote({setCurrentPage}) {
  const location = useLocation();
  const quote = location.state?.data;
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(`Quote ${quote.id}`)
  }, [])

  const handleClick = () => {
    navigate(`/dashboard/quotes/${quote.id}/edit`, {
      state: { data: quote },
    });
  };

  return (
    <React.Fragment>
      <TableCard>
        <TableCardBody>
          <TableContainer>
            <TableTable>
              <THeadDark>
                <TRDark>
                  <THDark>Image</THDark>
                  <THDark>Product</THDark>
                  <THDark>Name</THDark>
                  <THDark>Sku</THDark>
                  <THDark>Quantity</THDark>
                  <THDark>Price</THDark>
                  <THDark>Total</THDark>
                </TRDark>
              </THeadDark>
              <TBodyDark>
                {quote.cartItems.map((cartItem, key) => (
                  <TRDark key={key}>
                    <TDDark>
                      <TdImg
                        src={
                          cartItem?.images?.length ? cartItem?.images[0] : ""
                        }
                        alt="thumbnail"
                      />
                    </TDDark>
                    <TDDark>{cartItem.name}</TDDark>
                    <TDDark>{cartItem.sku}</TDDark>
                    <TDDark>{cartItem.quantity}</TDDark>
                    <TDDark>{priceFormatter.format(cartItem.price)}</TDDark>
                    <TDDark>
                      {priceFormatter.format(
                        cartItem.price * cartItem.quantity
                      )}
                    </TDDark>
                  </TRDark>
                ))}
                <TRDark>
                  <TDDark></TDDark>
                  <TDDark></TDDark>
                  <TDDark></TDDark>
                  <TDDark></TDDark>
                  <TDDark></TDDark>
                  <TDDark>Total:</TDDark>
                  <TDDark>
                    <BoldDark>
                      {priceFormatter.format(quote.cartTotal)}
                    </BoldDark>
                  </TDDark>
                </TRDark>
              </TBodyDark>
            </TableTable>
          </TableContainer>
        </TableCardBody>
      </TableCard>
      <RegisterButtonDark onClick={handleClick}>
        Edit
      </RegisterButtonDark>
    </React.Fragment>
  );
}