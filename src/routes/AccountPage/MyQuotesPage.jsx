import moment from "moment";
import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../../context/user.context";
import { getUserQuotes } from "../../utils/firebase";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage/DashboardPage.styles";

export default function MyQuotesPage() {
  const { currentUserInfo } = useContext(UserContext);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getAllUserQuotes = async () => {
      const userQuotes = await getUserQuotes();
      setQuotes(userQuotes);
    }
    getAllUserQuotes();
  }, [])

  return (
    <React.Fragment>
      <DTable>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Salesperson</Th>
            <Th>Created By</Th>
            <Th>Created For</Th>
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
                  <Td>{quote.createdFor}</Td>
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
      </React.Fragment>
  )
}