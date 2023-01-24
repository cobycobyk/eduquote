import React, {useState, useEffect} from "react";
import moment from "moment";
import { getUserQuotes } from "../../utils/firebase";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage/DashboardPage.styles";
import MyQuoteModal from "./MyQuoteModal";

export default function MyQuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const getAllUserQuotes = async () => {
      const userQuotes = await getUserQuotes();
      setQuotes(userQuotes);
    }
    getAllUserQuotes();
  }, [])

  const handleClick = () => {
    setConfirm(true);
  };

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
                <React.Fragment key={key}>
                  <Tr onClick={() => handleClick(quote)}>
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
                  <MyQuoteModal confirm={confirm} setConfirm={setConfirm} quote={quote}/>
                </React.Fragment>
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