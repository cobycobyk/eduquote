import React from "react";
import { useLoaderData } from "react-router-dom";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { getCatalogs } from "./catalog";

export async function loader({ request }) {
  const catalogs = await getCatalogs();
  return catalogs;
}

export default function DashCatalogs() {
  const catalogs = useLoaderData();

  return (
    <DTable>
      <Thead>
        <Tr>
          <Th>check</Th>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Status</Th>
          <Th>Created</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      {catalogs.length ? (
        <Tbody>
          {catalogs?.map((catalog, key) => {
            return (
              <Tr key={key}>
                <Th>{catalog.first}</Th>
                <Td>{catalog.last}</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <div>No Catalogs</div>
      )}
    </DTable>
  );
}