import React from "react";
import { useLoaderData } from "react-router-dom";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { getQuotes } from "./quote";

export async function loader({ request }) {
  const quotes = await getQuotes();
  return quotes;
}

export default function DashQuotes() {
  const quotes = useLoaderData();

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
      {quotes.length ? (
        <Tbody>
          {quotes?.map((quote, key) => {
            return (
              <Tr key={key}>
                <Th>{quote.first}</Th>
                <Td>{quote.last}</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <div>No Quotes</div>
      )}
    </DTable>
  );
}