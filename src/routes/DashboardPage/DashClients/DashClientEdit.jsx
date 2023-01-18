import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  FormLabel,
  Formm,
  RegisterButton,
  SignupCard,
  SignupColumn,
  SignupColumnFull,
  SignupInput,
  SignupLabelRow,
  SignupRow,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { CancelButton, Danger } from "../../../assets/css/custom.styles";
import { deleteClient, updateClient } from "../../../utils/firebase";
import { FormExButton } from "../../ContactPage/ContactPage.styles";
import { UserContext } from "../../../context/user.context";

export default function DashClientEdit({setCurrentPage}) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const clientInfo = location.state?.data;
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setFormData(clientInfo);
    setCurrentPage("Edit Client");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateClient(formData);
    navigate("/dashboard/clients");
  };
  
  const handleDelete = async () => {
    await deleteClient(currentUserInfo, formData);
    navigate("/dashboard/clients");
  }

  return (
    <SignupCard>
      <CardTitlee>Edit Client</CardTitlee>
      <Formm onSubmit={handleSubmit}>
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
              onChange={handleChange}
              id="firstName"
              placeholder={clientInfo.firstName}
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter first name",
                },
              }}
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
              onChange={handleChange}
              id="lastName"
              placeholder={clientInfo.lastName}
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter last name",
                },
              }}
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.AtSign />
              <FormLabel>
                Email <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder={clientInfo.email}
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your email",
                },
                pattern: {
                  value: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                  errorMessage: "E-Mail is not valid!",
                },
              }}
            />
          </SignupColumn>
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
              onChange={handleChange}
              id="institution"
              required
              errorMessage=""
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.AtSign />
              <FormLabel>
                Salesperson <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              value={formData.salesperson}
              onChange={handleChange}
              type="text"
              name="salesperson"
              id="salesperson"
              placeholder={clientInfo.salesperson}
              required
              errorMessage=""
            />
          </SignupColumn>
          <SignupColumn>
            <SignupColumnFull>
              <RegisterButton type="submit">Save and Exit</RegisterButton>
            </SignupColumnFull>
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
              <CancelButton onClick={() => navigate('/dashboard/clients')}>Cancel</CancelButton>
            </SignupColumn>
            <SignupColumn>
              <CancelButton onClick={handleDelete}>Delete Client</CancelButton>
          </SignupColumn>
        </SignupRow>
      </Formm>
    </SignupCard>
  );
}
