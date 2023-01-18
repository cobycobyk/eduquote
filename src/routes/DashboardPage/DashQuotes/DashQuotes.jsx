import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { getAllQuotes } from "../../../utils/firebase";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import moment from "moment";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid2 } from "../../../assets/css/custom.styles";
import sortBy from "sort-by";

export default function DashQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [otherQuotes, setOtherQuotes] = useState([]);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuotes = async () => {
      const allQuotes = await getAllQuotes(currentUserInfo);
      setQuotes(allQuotes.quotes.sortBy("createdAt"));
      setOtherQuotes(allQuotes.otherQuotes)
    };
    getQuotes();
  }, []);

  const handleClick = (quote) => {
    navigate(`/dashboard/quotes/${quote.id}`, {
      state: { data: quote },
    });
  };

  return (
    <React.Fragment>
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
                <Tr key={key} onClick={() => handleClick(quote)}>
                  <Th>{quote.id}</Th>
                  <Td>{quote.salesperson}</Td>
                  <Td>{quote.createdBy}</Td>
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
      <TextDividerSolid2></TextDividerSolid2>
      <div>Quotes from other salespersons</div>
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
        {otherQuotes.length ? (
          <Tbody>
            {otherQuotes?.map((quote, key) => {
              return (
                <Tr key={key} onClick={() => handleClick(quote)}>
                  <Th>{quote.id}</Th>
                  <Td>{quote.salesperson}</Td>
                  <Td>{quote.createdBy}</Td>
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
              <Th>No Other Quotes</Th>
            </Tr>
          </Tbody>
        )}
      </DTable>
    </React.Fragment>
  );
}