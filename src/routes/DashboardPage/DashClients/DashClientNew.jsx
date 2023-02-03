import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  SignupSelect,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger } from "../../../assets/css/custom.styles";
import { addClient } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import instance, {emulator} from "../../../axios";

const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  institution: "",
  phoneNumber: "",
  salesperson: "",
  role: "client",
  password: "",
  confirmPassword: "",
};

export default function DashClientNew() {
  const [formData, setFormData] = useState(defaultFormData);
  const [salespersons, setSalespersons] = useState([]);
  const [salesperson, setSalesperson] = useState("");
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSalesperson(currentUserInfo?.firstName);
  }, [currentUserInfo]);

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await instance({
      method: 'post',
      url: "/users/create",
      data: {
        formData,
      }
    });
    console.log(newUser.data.uid)
    // const company = currentUserInfo.company;
    // await addClient(company, formData);
    // resetFormData();
    // navigate('/dashboard/clients');
  };

  return (
    <SignupCard>
      <CardTitlee>Add Client</CardTitlee>
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
              placeholder="First Name"
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
              placeholder="Last Name"
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
              placeholder="Enter Email"
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
              placeholder="Institution Name"
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
              placeholder={salesperson}
              required
              errorMessage=""
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.AtSign />
              <FormLabel>
                Role <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
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
            <SignupLabelRow>
              <Icon.Phone />
              <FormLabel>
                Phone Number <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
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
            <SignupLabelRow>
              <Icon.Lock />
              <FormLabel>
                Password<Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Enter password"
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Password",
                },
                minLength: {
                  value: 6,
                  errorMessage:
                    "Your password must be between 6 and 8 characters",
                },
                maxLength: {
                  value: 16,
                  errorMessage:
                    "Your password must be between 6 and 8 characters",
                },
              }}
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.Lock />
              <FormLabel>
                Confirm Password<Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              placeholder="Confirm password"
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Password",
                },
                minLength: {
                  value: 6,
                  errorMessage:
                    "Your password must be between 6 and 8 characters",
                },
                maxLength: {
                  value: 16,
                  errorMessage:
                    "Your password must be between 6 and 8 characters",
                },
              }}
            />
          </SignupColumn>
        </SignupRow>
        <SignupColumn>
          <SignupColumnFull>
            <RegisterButton type="submit">Add Client</RegisterButton>
          </SignupColumnFull>
        </SignupColumn>
      </Formm>
    </SignupCard>
  );
}
