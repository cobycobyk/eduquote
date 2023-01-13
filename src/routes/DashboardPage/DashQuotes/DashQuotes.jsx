import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { getAllQuotes } from "../../../utils/firebase";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import moment from "moment";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";

export default function DashQuotes() {
  const [quotes, setQuotes] = useState([]);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuotes = async () => {
      const allQuotes = await getAllQuotes(currentUserInfo);
      setQuotes(allQuotes);
    };
    getQuotes();
  }, []);

  return (
    <DTable>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Salesperson</Th>
          <Th>Created By</Th>
          <Th>Total Items</Th>
          <Th>Total Price</Th>
          <Th>Created At</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      {quotes.length ? (
        <Tbody>
          {quotes?.map((quote, key) => {
            return (
              <Tr key={key}>
                <Th>{quote.id}</Th>
                <Td>{quote.salesperson}</Td>
                <Td>{quote.salesperson}</Td>
                <Td>{quote.cartCount}</Td>
                <Td>{priceFormatter.format(quote.cartTotal)}</Td>
                <Td>
                  {moment
                    .unix(quote.createdAt)
                    .subtract(1969, "years")
                    .format("MMMM Do YYYY")}
                </Td>
                <Td>{quote.status}</Td>
                <Td>Actions</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <Tbody>
          <Tr>
            <Th>No Quotes</Th>
          </Tr>
        </Tbody>
      )}
    </DTable>
  );
}