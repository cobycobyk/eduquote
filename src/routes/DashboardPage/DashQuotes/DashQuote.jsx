import React, {useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Bold } from "../../../assets/css/custom.styles";
import { CheckoutTable, TableColumn, TdImg } from "../../../components/ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { CartCallToActionButton } from "../../../components/Cart/Cart.styles";

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
      <TableColumn>
        <CheckoutTable>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Name</Th>
              <Th>Sku</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {quote.cartItems.map((cartItem, key) => (
              <Tr key={key}>
                <Th>
                  <TdImg src={cartItem.image} alt="product image" />
                </Th>
                <Td>{cartItem.name}</Td>
                <Td>{cartItem.sku}</Td>
                <Td>
                  {cartItem.quantity}
                </Td>
                <Td>{priceFormatter.format(cartItem.price)}</Td>
                <Td>
                  {priceFormatter.format(cartItem.price * cartItem.quantity)}
                </Td>
              </Tr>
            ))}
            <Tr>
              <Th></Th>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Th></Th>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>Total:</Td>
              <Td>
                <Bold>{priceFormatter.format(quote.cartTotal)}</Bold>
              </Td>
            </Tr>
          </Tbody>
        </CheckoutTable>
      </TableColumn>
      <CartCallToActionButton onClick={handleClick}>Edit</CartCallToActionButton>
    </React.Fragment>
  );
}