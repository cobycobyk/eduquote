import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  CardTitleeDark,
  FormLabel,
  RegisterButton,
  RegisterButtonDark,
  SignupCard,
  SignupCardDark,
  SignupColumn,
  SignupColumnFull,
  SignupInput,
  SignupLabelRow,
  SignupLabelRowDark,
  SignupRow,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger, TextDividerSolid2, TextDividerSolid2Dark } from "../../../assets/css/custom.styles";
import { getQuotesFromClient } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import { DMainBG, DMainNavLeft, DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import moment from "moment";
import sortBy from "sort-by";
import { QuoteTitle } from "../../../components/Quote/Quote.styles";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { TableCard, TableCardBody, TableContainer, TableTable, TBodyDark, TDDark, THDark, THeadDark, TRDark } from "../../../assets/css/table.styles";

export default function DashClient({ setCurrentPage }) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const clientInfo = location.state?.data;
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);
  const [otherQuotes, setOtherQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const allQuotes = await getQuotesFromClient(currentUserInfo, clientInfo);
      setQuotes(allQuotes?.clientQuotes);
      setOtherQuotes(allQuotes?.otherClientQuotes);
    };
    getQuotes();
    setFormData(clientInfo);
    setCurrentPage(clientInfo.email);
  }, []);

  const handleClick = () => {
    navigate(`/dashboard/clients/${clientInfo.email}/edit`, {
      state: { data: clientInfo },
    });
  };
  const handleClickQuote = (quote) => {
    navigate(`/dashboard/quotes/${quote.id}`, {
      state: { data: quote },
    });
  }



  return (
    <SignupCardDark>
      <DMainBG>
        <CardTitleeDark>EDIT CLIENT</CardTitleeDark>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.User />
              <FormLabel>
                First Name <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              value={formData.firstName}
              name="firstName"
              id="firstName"
              placeholder={clientInfo.firstName}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                Last name <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
              placeholder={clientInfo.lastName}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.AtSign />
              <FormLabel>
                Email <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              value={formData.email}
              type="email"
              name="email"
              id="email"
              placeholder={clientInfo.email}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.Phone />
              <FormLabel>
                Institution <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              placeholder={clientInfo.institution}
              name="institution"
              value={formData.institution}
              id="institution"
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.AtSign />
              <FormLabel>
                Salesperson <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              value={formData.salesperson}
              type="text"
              name="salesperson"
              id="salesperson"
              placeholder={clientInfo.salesperson}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.AtSign />
              <FormLabel>
                Role <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              value={formData.role}
              type="text"
              name="role"
              id="role"
              placeholder={clientInfo.role}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.AtSign />
              <FormLabel>
                Phone Number <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              value={formData.phoneNumber}
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder={clientInfo.phoneNumber}
              required
              errorMessage=""
              disabled
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupColumnFull>
              <RegisterButtonDark onClick={handleClick}>
                Edit
              </RegisterButtonDark>
            </SignupColumnFull>
          </SignupColumn>
        </SignupRow>
      </DMainBG>
      <TextDividerSolid2Dark></TextDividerSolid2Dark>
      <CardTitleeDark>CLIENT QUOTES</CardTitleeDark>
      <DMainNavLeft>Quotes made by me</DMainNavLeft>
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
                  <THDark>Updated At</THDark>
                  <THDark>Status</THDark>
                  <THDark>Actions</THDark>
                </TRDark>
              </THeadDark>
              {quotes.length ? (
                <TBodyDark>
                  {quotes?.map((quote, key) => {
                    return (
                      <TRDark key={key} onClick={() => handleClickQuote(quote)}>
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
                        <TDDark>
                          {moment
                            .unix(quote?.updatedAt)
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
                    <THDark>No Quotes</THDark>
                  </TRDark>
                </TBodyDark>
              )}
            </TableTable>
          </TableContainer>
        </TableCardBody>
      </TableCard>

      <TextDividerSolid2></TextDividerSolid2>
      <DMainNavLeft>Quotes from other salespersons</DMainNavLeft>
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
                  <THDark>Updated At</THDark>
                  <THDark>Status</THDark>
                  <THDark>Actions</THDark>
                </TRDark>
              </THeadDark>
              {otherQuotes.length ? (
                <TBodyDark>
                  {otherQuotes?.map((quote, key) => {
                    return (
                      <TRDark key={key} onClick={() => handleClickQuote(quote)}>
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
                        <TDDark>
                          {moment
                            .unix(quote?.updatedAt)
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
    </SignupCardDark>
  );
}
