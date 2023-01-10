import React from "react";
import { useLoaderData } from "react-router-dom";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";

export default function DashClients() {
  const clients = useLoaderData();

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
      {clients.length ? (
        <Tbody>
          {clients?.map((client, key) => {
            return (
              <Tr key={key}>
                <Th>{client.first}</Th>
                <Td>{client.last}</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <div>No clients</div>
      )}
    </DTable>
  );
}
