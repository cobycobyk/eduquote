import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";

export default function ConfirmTableItem({ cartItem }) {
  return (
    <tr className="shop-list">
      <th>
        <div className="d-flex align-items-center">
          <img
            src={cartItem.image}
            className="img-fluid avatar avatar-small rounded shadow"
            style={{ height: "10rem" }}
            alt=""
          />
          <h6 className="mb-0 ms-3">{cartItem.name}</h6>
        </div>
      </th>
      <td>{cartItem.name}</td>
      <td>{cartItem.sku}</td>
      <td>{priceFormatter.format(cartItem.price)}</td>
    </tr>
  );
}