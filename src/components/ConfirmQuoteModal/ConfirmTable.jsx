import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import ConfirmTableItem from './ConfirmTableItem';
import { priceFormatter } from '../../utils/helperFunctions/PriceFormatter';
import { CheckoutTable, TableColumn, TableTitle, Tbody, Td, Th, Thead, Tr } from './ConfirmQuoteModal.styles';

export default function ConfirmTable({cartItems, cartTotal}) {
  return (
    <React.Fragment>
      <Col>
        <Row>
          <Col xs={12}>
            <div className="table-responsive bg-white shadow">
              <Table className="table-center table-padding mb-0 table-hover">
                <thead>
                  <tr>
                    <th
                      className="py-3 border-bottom"
                      style={{ minWidth: "20px" }}
                    >
                      {" "}
                      Product{" "}
                    </th>
                    <th
                      className="py-3 border-bottom"
                      style={{ minWidth: "150px" }}
                    >
                      {" "}
                      Name{" "}
                    </th>
                    <th
                      className="py-3 border-bottom"
                      style={{ minWidth: "150px" }}
                    >
                      {" "}
                      Sku{" "}
                    </th>
                    <th
                      className="py-3 border-bottom"
                      style={{ minWidth: "100px" }}
                    >
                      Quantity
                    </th>
                    <th
                      className=" py-3 border-bottom"
                      style={{ minWidth: "100px" }}
                    >
                      Price
                    </th>
                    <th
                      className=" py-3 border-bottom"
                      style={{ minWidth: "100px" }}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((cartItem, key) => (
                    <ConfirmTableItem cartItem={cartItem} key={key} />
                  ))}
                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td></td>
                    <td></td>
                    <td>{priceFormatter.format(cartTotal)}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Col>
      <TableColumn>
        <TableTitle>Quote Details</TableTitle>
        <CheckoutTable>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Name</Th>
              <Th>Sku</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((cartItem, key) => (
              <ConfirmTableItem cartItem={cartItem} key={key} />
            ))}
          </Tbody>
        </CheckoutTable>
      </TableColumn>
    </React.Fragment>
  );
}