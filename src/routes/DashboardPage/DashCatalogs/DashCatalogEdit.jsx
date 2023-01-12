import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  FormLabel,
  Formm,
  SignupCard,
  SignupColumn,
  SignupColumnFull,
  SignupInput,
  SignupLabelRow,
  SignupRow,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { CancelButton, Danger, SaveButton } from "../../../assets/css/custom.styles";
import { updateCatalog } from "../../../utils/firebase";

export default function DashCatalogEdit({setCurrentPage}) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const catalog = location.state?.data
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(catalog);
    setCurrentPage("Edit Catalog");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCatalog(formData);
    navigate(`/dashboard/catalogs`);
  };

  return (
    <React.Fragment>
      <SignupCard>
        <CardTitlee>Edit Catalog Information</CardTitlee>
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
                placeholder={formData.company}
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
                <SaveButton type="submit">Save and Exit</SaveButton>
                <CancelButton onClick={() => navigate("/dashboard/catalogs")}>
                  Cancel
                </CancelButton>
              </SignupColumnFull>
            </SignupColumn>
          </SignupRow>
        </Formm>
      </SignupCard>
      <SignupCard>

      </SignupCard>
    </React.Fragment>
  );
}
