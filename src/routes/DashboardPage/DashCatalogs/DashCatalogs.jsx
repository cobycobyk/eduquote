import React, { useState, useEffect, useContext } from "react";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import  moment from "moment";
import { UserContext } from "../../../context/user.context";
import { getAllCatalogs } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function DashCatalogs() {
  const [catalogs, setCatalogs] = useState([]);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getCatalogs = async () => {
      const company = currentUserInfo.company;
      const allCatalogs = await getAllCatalogs(company);
      setCatalogs(allCatalogs);
    }
    getCatalogs();
  }, [])

  const handleClick = (catalog) => {
    navigate(`/dashboard/catalogs/${catalog.category}`, {state:{data: catalog}})
  }

  return (
    <DTable>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Company</Th>
          <Th>Category</Th>
          <Th>Sub Category</Th>
          <Th>Item Count</Th>
          <Th>Status</Th>
          <Th>Created</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      {catalogs.length ? (
        <Tbody>
          {catalogs?.map((catalog, key) => {
            return (
              <Tr key={key} onClick={() => handleClick(catalog)}>
                <Th>{catalog.name}</Th>
                <Td>{catalog.company}</Td>
                <Td>{catalog.category}</Td>
                <Td>{catalog?.subCategory}</Td>
                <Td>{catalog.items.length}</Td>
                <Td>{catalog.status}</Td>
                <Td>
                  {moment
                    .unix(catalog.createdAt)
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
            <Th>No Catalogs</Th>
          </Tr>
        </Tbody>
      )}
    </DTable>
  );
}