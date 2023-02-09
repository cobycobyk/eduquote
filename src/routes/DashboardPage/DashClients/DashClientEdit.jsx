import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  CardTitleeDark,
  FormLabel,
  Formm,
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
  SignupSelect,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { CancelButton, Danger } from "../../../assets/css/custom.styles";
import { UserContext } from "../../../context/user.context";
import instance, { emulator } from "../../../axios";
import { DMainBG } from "../DashboardPage.styles";

export default function DashClientEdit({setCurrentPage}) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const clientInfo = location.state?.data;
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setFormData(clientInfo);
    setCurrentPage(`Edit Client ${clientInfo.email}`);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await instance({
      method: "post",
      url: "/users/get",
      data: {
        formData,
        currentUserInfo,
      },
    });
    navigate("/dashboard/clients");
  };
  
  const handleDelete = async (event) => {
    event.preventDefault();
    const a = await instance({
      method: "post",
      url: "/users/delete",
      data: {
        formData,
      },
    });
    console.log(a);
    navigate("/dashboard/clients");
  }

  return (
    <DMainBG>
      <SignupCardDark>
        <CardTitleeDark>Edit Client</CardTitleeDark>
        <Formm onSubmit={handleSubmit}>
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
            <SignupColumn>
              <SignupLabelRowDark>
                <Icon.AtSign />
                <FormLabel>
                  Email <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
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
                onChange={handleChange}
                id="institution"
                required
                errorMessage=""
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
              <SignupLabelRowDark>
                <Icon.AtSign />
                <FormLabel>
                  Role <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupSelect
                value={formData.role}
                name="role"
                onChange={handleChange}
                id="role"
                placeholder="Role"
                errorMessage=""
              >
                <option value="client">Client</option>
                <option value="salesPartnerRep">Sales Partner Rep</option>
                <option value="companyRep">Company Rep</option>
              </SignupSelect>
            </SignupColumn>
            <SignupColumn>
              <SignupLabelRowDark>
                <Icon.Phone />
                <FormLabel>
                  Phone Number <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupInput
                type="tel"
                placeholder="Mobile number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                required
                errorMessage=""
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Please enter your phone number",
                  },
                  minLength: {
                    value: 6,
                  },
                  maxLength: {
                    value: 16,
                  },
                }}
              />
            </SignupColumn>
          </SignupRow>
          <SignupRow>
            <SignupColumn>
              <SignupColumnFull>
                <RegisterButtonDark type="submit">Save and Exit</RegisterButtonDark>
              </SignupColumnFull>
            </SignupColumn>
          </SignupRow>
          <SignupRow>
            <SignupColumn>
              <CancelButton onClick={() => navigate("/dashboard/clients")}>
                Cancel
              </CancelButton>
            </SignupColumn>
            <SignupColumn>
              <CancelButton onClick={handleDelete}>Delete Client</CancelButton>
            </SignupColumn>
          </SignupRow>
        </Formm>
      </SignupCardDark>
    </DMainBG>
  );
}
