import React, { useState, useEffect, useContext } from "react";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import  moment from "moment";
import { UserContext } from "../../../context/user.context";
import { getAllProducts } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { TableCard, TableCardBody, TableContainer, TableTable, TBodyDark, TDDark, TDDarkInside, THDark, THeadDark, TRDark } from "../../../assets/css/table.styles";
import { CartThumbnail } from "../../../components/Cart/Cart.styles";

export default function DashProducts() {
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [products, setCatalogs] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const company = currentUserInfo.company;
      const allCatalogs = await getAllProducts(company);
      setCatalogs(allCatalogs);
    }
    getProducts();
  }, [])

  const handleClick = (product) => {
    navigate(`/dashboard/products/${product.sku}`, {state:{data: product}})
  }

  return (
    <TableCard>
      <TableCardBody>
        <TableContainer>
          <TableTable>
            <THeadDark>
              <TRDark>
                <THDark>Image</THDark>
                <THDark>Name</THDark>
                <THDark>SKU</THDark>
                <THDark>Category</THDark>
                <THDark>Sub Category</THDark>
                <THDark>Group</THDark>
                <THDark>Description</THDark>
                <THDark>Status</THDark>
                <THDark>Created</THDark>
                <THDark>Actions</THDark>
              </TRDark>
            </THeadDark>
            {products.length ? (
              <TBodyDark>
                {products?.map((product, key) => {
                  return (
                    <TRDark key={key} onClick={() => handleClick(product)}>
                      <TDDark>
                        {product?.images ? (
                          <CartThumbnail src={product.images[0]} />
                        ) : (
                          ""
                        )}
                      </TDDark>
                      <TDDark>{product.name}</TDDark>
                      <TDDark>{product.sku}</TDDark>
                      <TDDark>{product.category}</TDDark>
                      <TDDark>{product?.subCategory}</TDDark>
                      <TDDark>{product?.group}</TDDark>
                      <TDDark>
                        <TDDarkInside>{product.description}</TDDarkInside>
                      </TDDark>
                      <TDDark>{product.status}</TDDark>
                      <TDDark>
                        {moment
                          .unix(product.createdAt)
                          .subtract(1969, "years")
                          .format("MMMM Do YYYY")}
                      </TDDark>
                      <TDDark>Actions</TDDark>
                    </TRDark>
                  );
                })}
              </TBodyDark>
            ) : (
              <TBodyDark>
                <TRDark>
                  <THDark>No Products</THDark>
                </TRDark>
              </TBodyDark>
            )}
          </TableTable>
        </TableContainer>
      </TableCardBody>
    </TableCard>
  );
}