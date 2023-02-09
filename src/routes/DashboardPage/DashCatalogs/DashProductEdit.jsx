import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CardTitlee,
  CardTitleeDark,
  FormLabel,
  Formm,
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
import { CancelButton, Danger, SaveButton } from "../../../assets/css/custom.styles";
import { deleteAllImagesFromProduct, deleteProduct, updateProduct } from "../../../utils/firebase";
import { ProductsContext } from "../../../context/products.context";
import { UserContext } from "../../../context/user.context";

export default function DashProductEdit({setCurrentPage}) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const product = location.state?.data
  const navigate = useNavigate();
  const { currentUserInfo } = useContext(UserContext);
  const { productCategories, productSubCategories, productGroups } = useContext(ProductsContext);
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setFormData(product);
    setCurrentPage(`Edit ${product.name}`);
  }, []);

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
    if (!formData.category.length)
      return setMessage("Please enter the required fields");
    if (
      newCategory &&
      productCategories.some(
        (cat) => cat.toLowerCase() === formData.category.toLowerCase()
      )
    )
      return setMessage("Category already exists");
    if (
      newSubCategory &&
      productSubCategories.some(
        (cat) => cat.toLowerCase() === formData.subCategory.toLowerCase()
      )
    )
      return setMessage("Sub Category already exists");
    if (
      newGroup &&
      productGroups.some(
        (cat) => cat.toLowerCase() === formData.group.toLowerCase()
      )
    )
      return setMessage("Group already exists");
    await updateProduct(currentUserInfo, formData);
    navigate(`/dashboard/products`);
    
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteAllImagesFromProduct(formData);
    await deleteProduct(currentUserInfo, formData);
    navigate("/dashboard/products");
  }

  return (
    <React.Fragment>
      <SignupCardDark>
        <CardTitleeDark>Edit Product Information</CardTitleeDark>
        {message && <div>{message}</div>}
        <Formm onSubmit={handleSubmit}>
          <SignupRow>
            <SignupColumn>
              <SignupLabelRowDark>
                <Icon.User />
                <FormLabel>
                  Name <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
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
              <SignupLabelRowDark>
                <Icon.User />
                <FormLabel>SKU</FormLabel>
              </SignupLabelRowDark>
              <SignupInput
                type="text"
                value={formData.sku}
                name="sku"
                onChange={handleChange}
                id="sku"
                placeholder="SKU"
                disabled
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
              <SignupLabelRowDark>
                <Icon.DollarSign />
                <FormLabel>
                  Price <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupInput
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                id="price"
                placeholder="Price"
              />
            </SignupColumn>
          </SignupRow>
          <SignupRow>
            <SignupColumn>
              <SignupLabelRowDark>
                <Icon.UserCheck />
                <FormLabel>
                  Category <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupSelect
                value={formData.category}
                name="category"
                onChange={handleChange}
                id="catgeory"
                placeholder="New Category Name"
                errorMessage=""
              >
                <option value={formData.category} selected>
                  {formData.category}
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
              <SignupLabelRowDark>
                <Icon.UserCheck />
                <FormLabel>
                  Sub Category <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupSelect
                value={formData.subCategory}
                name="subCategory"
                onChange={handleChange}
                id="subCategory"
                placeholder="New Sub Category Name"
                errorMessage=""
              >
                <option value="" >
                  {formData.subCategory}
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
              <SignupLabelRowDark>
                <Icon.UserCheck />
                <FormLabel>
                  Group <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
              <SignupSelect
                value={formData.group}
                name="group"
                onChange={handleChange}
                id="group"
                placeholder="New Group Name"
                errorMessage=""
              >
                <option value="">
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
              <SignupLabelRowDark>
                <Icon.FileText />
                <FormLabel>
                  Description <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRowDark>
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
                <SaveButton type="submit">Save and Exit</SaveButton>
                <CancelButton onClick={() => navigate("/dashboard/products")}>
                  Cancel
                </CancelButton>
                <CancelButton onClick={handleDelete}>
                  Delete Product
                </CancelButton>
              </SignupColumnFull>
            </SignupColumn>
          </SignupRow>
        </Formm>
      </SignupCardDark>
    </React.Fragment>
  );
}
