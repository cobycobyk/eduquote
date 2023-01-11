import React, {useContext, useState} from "react"
import Cart from "../../components/Cart/Cart"
import Quote from "../../components/Quote/Quote"
import { QuoteSectionContainer, QuoteSectionLeft, QuoteSectionRight } from "./QuotePage.styles"
import ProductModal from "../../components/ProductModal/ProductModal";
import { ProductsContext } from "../../context/products.context";


export default function QuotePage() {
  // const [products, setProducts] = useState(items);
  const [products, setProducts] = useContext(ProductsContext);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleProductClick = (product) => {
    setModalOpen(!modalOpen);
    setModal(product);
  };

  return (
    <React.Fragment>
      <QuoteSectionContainer>
        <QuoteSectionLeft>
          <Quote products={products} cart={cart} setCart={setCart} handleProductClick={handleProductClick} />
        </QuoteSectionLeft>
        <QuoteSectionRight>
          <Cart cart={cart} setCart={setCart} />
        </QuoteSectionRight>
      </QuoteSectionContainer>
      <ProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} modal={modal} setModal={setModal}/>
    </React.Fragment>
  );
}