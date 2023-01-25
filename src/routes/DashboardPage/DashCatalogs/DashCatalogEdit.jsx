import React, { useState, useEffect, useContext } from "react";
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
  SignupSelect,
} from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { CancelButton, Danger, SaveButton } from "../../../assets/css/custom.styles";
import { addCatalogCategory, addCatalogSubCategory, deleteCatalog, updateCatalog } from "../../../utils/firebase";
import { ProductsContext } from "../../../context/products.context";
import { UserContext } from "../../../context/user.context";

export default function DashCatalogEdit({setCurrentPage}) {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const catalog = location.state?.data
  const navigate = useNavigate();
  const { currentUserInfo } = useContext(UserContext);
  const { catalogCategories } = useContext(ProductsContext);
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState({ name: "", parent: "" });
  const [message, setMessage] = useState(false);
  const [catalogSubCategories, setCatalogSubCategories] = useState([]);

  useEffect(() => {
    setFormData(catalog);
    setCurrentPage(`Edit ${catalog.name} Catalog`);
  }, []);
  useEffect(() => {
    const subCats = () => {
      const a = [];
      const subs = catalogCategories.filter((cat) => {
        if (cat.name === formData.category) {
          console.log(cat.subCategories)
          return cat.subCategories;
        }
      })
      setCatalogSubCategories(subs[0]?.subCategories);
    }
    catalogCategories && subCats();
  }, [formData.category])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category" && value === "new") {
      setFormData({ ...formData, [name]: "" });
      return setNewCategory(true);
    } else if (name === "subCategory") {
      setNewSubCategory({
        ...newSubCategory,
        name: value,
        parent: formData.category,
      });
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category.length)
      return setMessage("Please enter category name");
    if (catalogCategories.some((cat) => cat.name === newCategory))
      return setMessage("Category already exists");
    if (newCategory) {
      await addCatalogCategory(currentUserInfo, formData.category);
    }
    if (newSubCategory) {
      await addCatalogSubCategory(currentUserInfo, newSubCategory)
    }
    await updateCatalog(formData);
    navigate(`/dashboard/catalogs`);
    
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteCatalog(formData);
    navigate("/dashboard/catalogs");
  }

  return (
    <React.Fragment>
      <SignupCard>
        <CardTitlee>Edit Catalog Information</CardTitlee>
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
                <option value={formData.category} selected>
                  {formData.category
                    ? formData.category
                    : "Type new Category below"}
                </option>
                {catalogCategories?.map((cat, key) => {
                  return <option key={key}>{cat.name}</option>;
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
              <SignupLabelRow>
                <Icon.UserCheck />
                <FormLabel>
                  Sub Category <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRow>
              <SignupInput
                type="text"
                name="subCategory"
                value={formData?.subCategory}
                onChange={handleChange}
                id="sku"
                placeholder={formData?.subCategory}
              />
            </SignupColumn>
          </SignupRow>
          <SignupRow>
            <SignupColumn>
              <SignupColumnFull>
                <SaveButton type="submit">Save and Exit</SaveButton>
                <CancelButton onClick={() => navigate("/dashboard/catalogs")}>
                  Cancel
                </CancelButton>
                <CancelButton onClick={handleDelete}>
                  Delete Catalog
                </CancelButton>
              </SignupColumnFull>
            </SignupColumn>
          </SignupRow>
        </Formm>
      </SignupCard>
      <SignupCard></SignupCard>
    </React.Fragment>
  );
}
