import React, { useState, useEffect, useContext } from "react";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import  moment from "moment";
import { UserContext } from "../../../context/user.context";
import { getAllProducts } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";

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
    <DTable>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>SKU</Th>
          <Th>Category</Th>
          <Th>Sub Category</Th>
          <Th>Group</Th>
          <Th>Status</Th>
          <Th>Created</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      {products.length ? (
        <Tbody>
          {products?.map((product, key) => {
            return (
              <Tr key={key} onClick={() => handleClick(product)}>
                <Th>{product.name}</Th>
                <Td>{product.sku}</Td>
                <Td>{product.category}</Td>
                <Td>{product?.subCategory}</Td>
                <Td>{product?.group}</Td>
                <Td>{product.status}</Td>
                <Td>
                  {moment
                    .unix(product.createdAt)
                    .subtract(1969, "years")
                    .format("MMMM Do YYYY")}
                </Td>
                <Td>Actions</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <Tbody>
          <Tr>
            <Th>No Products</Th>
          </Tr>
        </Tbody>
      )}
    </DTable>
  );
}