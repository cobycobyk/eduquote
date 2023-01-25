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
import { addCatalog, addCatalogCategory, addCatalogSubCategory, addClient } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";
import { ProductsContext } from "../../../context/products.context";

const defaultFormData = {
  name: "",
  company: "",
  category: "",
  subCategory: "",
  id: "",
};

export default function DashCatalogNew() {
  const [formData, setFormData] = useState(defaultFormData);
  const { currentUserInfo } = useContext(UserContext);
  const { catalogCategories } = useContext(ProductsContext);
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState({name: "", parent: ""})
  const navigate = useNavigate();
  const [message, setMessage] = useState(false)

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
    if (name === "category" && value === "new") {
      setFormData({ ...formData, [name]: "" });
      return setNewCategory(true);
    } else if (name === "subCategory") {
      setNewSubCategory({...newSubCategory, "name": value, "parent": formData.category})
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category.length) return setMessage("Please enter category name");
    if (catalogCategories.some((cat) => cat.name === formData.category))
      return setMessage("Category already exists");
    await addCatalogCategory(currentUserInfo, formData.category)
    if (newSubCategory.name.length) {
      await addCatalogSubCategory(currentUserInfo, newSubCategory);
      await addCatalog(currentUserInfo, formData);
      resetFormData();
      navigate(`/dashboard/catalogs/${formData.category}`, {state: {data: formData}});
    } else {
      await addCatalog(currentUserInfo, formData);
      resetFormData();
      navigate(`/dashboard/catalogs/${formData.category}`, {state: {data: formData}});
    }
  };

  return (
    <SignupCard>
      <CardTitlee>New Catalog</CardTitlee>
      {message && <div>{message}</div>}
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

            <SignupSelect
              value={formData.category}
              name="category"
              onChange={handleChange}
              id="catgeory"
              placeholder="New Category Name"
              errorMessage=""
            >
              <option value="" selected>
                {newCategory ? ("Type new Category below"):("Choose Parent Here")}
              </option>
              {catalogCategories?.map((cat, key) => {
                return <option key={key}>{cat.name}</option>;
              })}
              <option value="new">Enter New Category</option>
            </SignupSelect>
            {newCategory &&
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
            }
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
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>
                Sub Category <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              id="subCategory"
              placeholder="Sub Category"
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
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
