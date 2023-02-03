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
import { addProduct } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";
import { ProductsContext } from "../../../context/products.context";

const defaultFormData = {
  name: "",
  company: "",
  category: "",
  subCategory: "",
  group: "",
  price: "",
  description: "",
};

export default function DashProductNew() {
  const [formData, setFormData] = useState(defaultFormData);
  const { currentUserInfo } = useContext(UserContext);
  const { products, productCategories, productSubCategories, productGroups, addProductToProducts } = useContext(ProductsContext);
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState(false)
  const [newGroup, setNewGroup] = useState(false)
  const navigate = useNavigate();
  const [message, setMessage] = useState(false)

  useEffect(() => {
    setFormData({
      ...formData,
      company: currentUserInfo?.company,
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
    }
    if (name === "subCategory" && value === "new") {
      setFormData({ ...formData, [name]: "" });
      return setNewSubCategory(true);
    }
    if (name === "group" && value === "new") {
      setFormData({ ...formData, [name]: "" });
      return setNewGroup(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category.length) return setMessage("Please enter the required fields");
    if (newCategory && productCategories.some((cat) => cat.toLowerCase() === formData.category.toLowerCase()))
      return setMessage("Category already exists");
    if (newSubCategory && productSubCategories.some((cat) => cat.toLowerCase() === formData.subCategory.toLowerCase()))
      return setMessage("Sub Category already exists");
    if (newGroup && productGroups.some((cat) => cat.toLowerCase() === formData.group.toLowerCase()))
      return setMessage("Group already exists");
    if (products.some((product) => product.sku === formData.sku)) return setMessage('Product Already Exists')
    await addProduct(currentUserInfo, formData);
    addProductToProducts(formData);
    resetFormData();
    navigate(`/dashboard/products/${formData.sku}`, { state: { data: formData } });
  };

  return (
    <SignupCard>
      <CardTitlee>New Product</CardTitlee>
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
              <Icon.User />
              <FormLabel>
                SKU <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              value={formData.sku}
              name="sku"
              onChange={handleChange}
              id="sku"
              placeholder="SKU"
              required
              errorMessage=""
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter a Sku",
                },
              }}
            />
          </SignupColumn>
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
              id="company"
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
        </SignupRow>
        <SignupRow>
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
                {newCategory
                  ? "Type new Category below"
                  : "Choose Category Here"}
              </option>
              {productCategories?.map((cat, key) => {
                return <option key={key}>{cat}</option>;
              })}
              <option value="new">Enter New Category</option>
            </SignupSelect>
            {newCategory && (
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
            )}
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>
                Sub Category <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupSelect
              value={formData.subCategory}
              name="subCategory"
              onChange={handleChange}
              id="subCategory"
              placeholder="New Sub Category Name"
              errorMessage=""
            >
              <option value="" selected>
                {newSubCategory
                  ? "Type new Sub Category below"
                  : "Choose Sub Category Here"}
              </option>
              {productSubCategories?.map((cat, key) => {
                return <option key={key}>{cat}</option>;
              })}
              <option value="new">Enter New Sub Category</option>
            </SignupSelect>
            {newSubCategory && (
              <SignupInput
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                id="subCategory"
                placeholder="Sub Category"
                required
                errorMessage=""
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Please enter a sub category",
                  },
                }}
              />
            )}
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>
                Group <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupSelect
              value={formData.group}
              name="group"
              onChange={handleChange}
              id="group"
              placeholder="New Group Name"
              errorMessage=""
            >
              <option value="" selected>
                {newSubCategory
                  ? "Type new Group below"
                  : "Choose Group Here"}
              </option>
              {productGroups?.map((cat, key) => {
                return <option key={key}>{cat}</option>;
              })}
              <option value="new">Enter New Group</option>
            </SignupSelect>
            {newGroup && (
              <SignupInput
                type="text"
                name="group"
                value={formData.group}
                onChange={handleChange}
                id="group"
                placeholder="Group"
                required
                errorMessage=""
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Please enter a Group",
                  },
                }}
              />
            )}
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.DollarSign />
              <FormLabel>
                Price <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              id="price"
              placeholder="Price"
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.FileText />
              <FormLabel>
                Description <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRow>
            <SignupInput
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              id="description"
              placeholder="Description"
              />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupColumnFull>
              <RegisterButton type="submit">Add Product</RegisterButton>
            </SignupColumnFull>
          </SignupColumn>
        </SignupRow>
      </Formm>
    </SignupCard>
  );
}
