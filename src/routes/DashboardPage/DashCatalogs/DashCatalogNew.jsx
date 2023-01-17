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
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger } from "../../../assets/css/custom.styles";
import { addCatalog, addClient } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";

const defaultFormData = {
  name: "",
  company: "",
  category: "",
  id: "",
};

export default function DashCatalogNew() {
  const [formData, setFormData] = useState(defaultFormData);
  const { currentUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const newDate = Date.now().toString();
    setFormData({
      ...formData,
      company: currentUserInfo?.company,
      id: newDate,
    });
  }, []);

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCatalog(currentUserInfo, formData);
    resetFormData();
    navigate(`/dashboard/catalogs/${formData.category}`, {state: {data: formData}});
  };

  return (
    <SignupCard>
      <CardTitlee>New Catalog</CardTitlee>
      <Formm onSubmit={handleSubmit}>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.User />
              <FormLabel>
                Name <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              value={formData.name}
              name="name"
              onChange={handleChange}
              id="name"
              placeholder="Name"
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter a Name",
                },
              }}
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>
                Category <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              id="category"
              placeholder="Category"
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter a category",
                },
              }}
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>
                Company <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              id="sku"
              placeholder={currentUserInfo?.company}
              required
              disabled
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter SKU",
                },
              }}
            />
          </SignupColumn>
          <SignupColumn>
            <SignupColumnFull>
              <RegisterButton type="submit">Add Catalog</RegisterButton>
            </SignupColumnFull>
          </SignupColumn>
        </SignupRow>
      </Formm>
    </SignupCard>
  );
}
