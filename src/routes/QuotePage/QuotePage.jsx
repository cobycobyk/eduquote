import React, {useState} from "react"
import Cart from "../../components/Cart/Cart"
import Quote from "../../components/Quote/Quote"
import { QuoteSectionContainer, QuoteSectionLeft, QuoteSectionRight } from "./QuotePage.styles"
import { items } from "../../components/Quote/items"
import { useOutletContext } from "react-router-dom"

export default function QuotePage() {
  // const [products, setProducts] = useState(items);
  const [products, setProducts] = useOutletContext([]);
  const [cart, setCart] = useState([]);

  return (
    <QuoteSectionContainer>
      <QuoteSectionLeft>
        <Quote products={products} cart={cart} setCart={setCart}/>
      </QuoteSectionLeft>
      <QuoteSectionRight>
        <Cart cart={cart} setCart={setCart}/>
      </QuoteSectionRight>
    </QuoteSectionContainer>
  )
}