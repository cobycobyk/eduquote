import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { Td, TdCenter, TdImg, Th, Tr } from "./ConfirmQuoteModal.styles";
import * as Icon from "react-feather";

export default function ConfirmTableItem({ cartItem }) {
  return (
    <Tr>
      <Th>
        <TdImg
          src={cartItem.image}
          alt="product image"
        />
      </Th>
      <Td>{cartItem.name}</Td>
      <Td>{cartItem.sku}</Td>
      <Td>
        <Icon.ChevronLeft />
        {cartItem.quantity}
        <Icon.ChevronRight />
      </Td>
      <Td>{priceFormatter.format(cartItem.price)}</Td>
      <Td>X</Td>
    </Tr>
  );
}