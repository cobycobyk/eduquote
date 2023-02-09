import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { getAllQuotes } from "../../../utils/firebase";
import { DMainNavLeft, DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import moment from "moment";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { TextDividerSolid2, TextDividerSolid2Dark } from "../../../assets/css/custom.styles";
import sortBy from "sort-by";
import { CardTitleeDark } from "../../SignupPage/SignupPage.styles";
import { TableCard, TableCardBody, TableContainer, TableTable, TBodyDark, TDDark, THDark, THeadDark, TRDark } from "../../../assets/css/table.styles";

export default function DashQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [otherQuotes, setOtherQuotes] = useState([]);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuotes = async () => {
      const allQuotes = await getAllQuotes(currentUserInfo);
      setQuotes(allQuotes?.quotes);
      setOtherQuotes(allQuotes?.otherQuotes)
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
      <CardTitleeDark>Quotes I Created</CardTitleeDark>
      <TableCard>
        <TableCardBody>
          <TableContainer>
            <TableTable>
              <THeadDark>
                <TRDark>
                  <THDark>ID</THDark>
                  <THDark>Salesperson</THDark>
                  <THDark>Created By</THDark>
                  <THDark>Created For</THDark>
                  <THDark>Total Items</THDark>
                  <THDark>Total Price</THDark>
                  <THDark>Created At</THDark>
                  <THDark>Status</THDark>
                  <THDark>Actions</THDark>
                </TRDark>
              </THeadDark>
              {quotes.length ? (
                <TBodyDark>
                  {quotes?.map((quote, key) => {
                    return (
                      <TRDark key={key} onClick={() => handleClick(quote)}>
                        <TDDark>{quote.id}</TDDark>
                        <TDDark>{quote.salesperson}</TDDark>
                        <TDDark>{quote.createdBy}</TDDark>
                        <TDDark>{quote.createdFor}</TDDark>
                        <TDDark>{quote.cartCount}</TDDark>
                        <TDDark>
                          {priceFormatter.format(quote.cartTotal)}
                        </TDDark>
                        <TDDark>
                          {moment
                            .unix(quote.createdAt)
                            .subtract(1969, "years")
                            .format("MMMM Do YYYY")}
                        </TDDark>
                        <TDDark>{quote.status}</TDDark>
                        <TDDark>Actions</TDDark>
                      </TRDark>
                    );
                  })}
                </TBodyDark>
              ) : (
                <TBodyDark>
                  <TRDark>
                    <DMainNavLeft>No Quotes</DMainNavLeft>
                  </TRDark>
                </TBodyDark>
              )}
            </TableTable>
          </TableContainer>
        </TableCardBody>
      </TableCard>

      <TextDividerSolid2Dark></TextDividerSolid2Dark>
      <CardTitleeDark>Quotes from other salespersons</CardTitleeDark>
      <TableCard>
        <TableCardBody>
          <TableContainer>
            <TableTable>
              <THeadDark>
                <TRDark>
                  <THDark>Salesperson</THDark>
                  <THDark>Created By</THDark>
                  <THDark>Total Items</THDark>
                  <THDark>Total Price</THDark>
                  <THDark>Created At</THDark>
                  <THDark>Status</THDark>
                  <THDark>Actions</THDark>
                </TRDark>
              </THeadDark>
              {otherQuotes.length ? (
                <TBodyDark>
                  {otherQuotes?.map((quote, key) => {
                    return (
                      <TRDark key={key} onClick={() => handleClick(quote)}>
                        <TDDark>{quote.salesperson}</TDDark>
                        <TDDark>{quote.createdBy}</TDDark>
                        <TDDark>{quote.cartCount}</TDDark>
                        <TDDark>
                          {priceFormatter.format(quote.cartTotal)}
                        </TDDark>
                        <TDDark>
                          {moment
                            .unix(quote.createdAt)
                            .subtract(1969, "years")
                            .format("MMMM Do YYYY")}
                        </TDDark>
                        <TDDark>{quote.status}</TDDark>
                        <TDDark>Actions</TDDark>
                      </TRDark>
                    );
                  })}
                </TBodyDark>
              ) : (
                <TBodyDark>
                  <TRDark>
                    <DMainNavLeft>No Other Quotes</DMainNavLeft>
                  </TRDark>
                </TBodyDark>
              )}
            </TableTable>
          </TableContainer>
        </TableCardBody>
      </TableCard>
    </React.Fragment>
  );
}