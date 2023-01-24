import { useContext } from "react";
import { MulticolorButton } from "../../components/Buttons/Buttons";
import { ProductsContext } from "../../context/products.context";
import { TestContainer } from "./TestPage.styles";

export default function TestPage() {
  const { catalogCategories } = useContext(ProductsContext);
  console.log(catalogCategories);
  return (
    <TestContainer>
      <MulticolorButton input="multi" />
    </TestContainer>
  );
}
