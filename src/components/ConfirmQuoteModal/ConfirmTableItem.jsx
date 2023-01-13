import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";

export default function ConfirmTableItem({ cartItem }) {
  return (
    <tr className="shop-list">
      <th>
        <img
          src={cartItem.image}
          className="img-fluid avatar avatar-small rounded shadow"
          style={{ height: "10rem" }}
          alt="product image"
        />
      </th>
      <td>{cartItem.name}</td>
      <td>{cartItem.sku}</td>
      <td>{cartItem.quantity}</td>
      <td>{priceFormatter.format(cartItem.price)}</td>
      <td>X</td>
    </tr>
  );
}