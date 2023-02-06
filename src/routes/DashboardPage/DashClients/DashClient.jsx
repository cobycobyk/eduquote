import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  FormLabel,
  RegisterButton,
  SignupCard,
  SignupColumn,
  SignupColumnFull,
  SignupInput,
  SignupLabelRow,
  SignupRow,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger, TextDividerSolid2 } from "../../../assets/css/custom.styles";
import { getQuotesFromClient } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import moment from "moment";
import sortBy from "sort-by";
import { QuoteTitle } from "../../../components/Quote/Quote.styles";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";

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
    <SignupCard>
      <CardTitlee>Edit Client</CardTitlee>
      <SignupRow>
        <SignupColumn>
          <SignupLabelRow>
            <Icon.User />
            <FormLabel>
              First Name <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.UserCheck />
            <FormLabel>
              Last name <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.AtSign />
            <FormLabel>
              Email <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.Phone />
            <FormLabel>
              Institution <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.AtSign />
            <FormLabel>
              Salesperson <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.AtSign />
            <FormLabel>
              Role <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
          <SignupLabelRow>
            <Icon.AtSign />
            <FormLabel>
              Phone Number <Danger>*</Danger>
            </FormLabel>
          </SignupLabelRow>
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
            <RegisterButton onClick={handleClick}>Edit</RegisterButton>
          </SignupColumnFull>
        </SignupColumn>
      </SignupRow>
      <TextDividerSolid2></TextDividerSolid2>
      <QuoteTitle>Client Quotes</QuoteTitle>
      <div>Quotes made by me</div>
      <DTable>
        <Thead>
          <Tr>
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
                <Tr key={key} onClick={() => handleClickQuote(quote)}>
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
                <Tr key={key} onClick={() => handleClickQuote(quote)}>
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
    </SignupCard>
  );
}
