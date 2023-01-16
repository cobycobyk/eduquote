import React from 'react';
import ConfirmTableItem from './ConfirmTableItem';
import { priceFormatter } from '../../utils/helperFunctions/PriceFormatter';
import { CheckoutTable, TableColumn, Tbody, Td, Th, Thead, Tr } from './ConfirmQuoteModal.styles';
import { Bold } from '../../assets/css/custom.styles';

export default function ConfirmTable({cartItems, cartTotal}) {
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
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((cartItem, key) => (
              <ConfirmTableItem cartItem={cartItem} key={key} />
            ))}
            <Tr>
              <Th></Th>
              <Td></Td>
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
              <Td></Td>
              <Td>Total:</Td>
              <Td>
                <Bold>{priceFormatter.format(cartTotal)}</Bold>
              </Td>
            </Tr>
          </Tbody>
        </CheckoutTable>
      </TableColumn>
    </React.Fragment>
  );
}