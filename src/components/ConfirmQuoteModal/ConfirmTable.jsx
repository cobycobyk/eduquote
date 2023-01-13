import { Row, Col, Table } from 'reactstrap';
import ConfirmTableItem from './ConfirmTableItem';
import { priceFormatter } from '../../utils/helperFunctions/PriceFormatter';

export default function ConfirmTable({cartItems, cartTotal}) {
  return (
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
  );
}