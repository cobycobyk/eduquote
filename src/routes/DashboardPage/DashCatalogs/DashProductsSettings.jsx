import React, { useContext, useState } from "react"
import { Bold, DisplayFlex, TextDividerSolid2 } from "../../../assets/css/custom.styles";
import { QuoteTitle } from "../../../components/Quote/Quote.styles";
import { ProductsContext } from "../../../context/products.context";
import { UserContext } from "../../../context/user.context"
import { addCategoryToCompany } from "../../../utils/firebase";
import { DashCatalogTableSection, DCSColumn, DCSRow } from "./DashCatalogs.styles";

const defaultFormData = {
  category: null,
  subCategory: null,
  group: null,
};

export default function DashProductsSettings() {
  const { currentUserInfo } = useContext(UserContext);
  const {
    productCategories,
    productSubCategories,
    productGroups,
    addProductCategory,
  } = useContext(ProductsContext);
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  
  const resetFormData = () => {
    setFormData(defaultFormData);
  }

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (productCategories.some((cat) => cat === formData.category)) return setMessage('Category already exists');
    if (productSubCategories.some((cat) => cat === formData.subCategory)) return setMessage('Sub Category already exists');
    if (productGroups.some((cat) => cat === formData.group)) return setMessage('Group already exists');
    await addCategoryToCompany(currentUserInfo, formData);
    if (formData.category) addProductCategory(formData.category)
    resetFormData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <React.Fragment>
      <DashCatalogTableSection>
        <QuoteTitle>Catalog Categories Settings</QuoteTitle>
        {message && <div>{message}</div>}
        <DCSRow>
          <DCSColumn></DCSColumn>
        </DCSRow>
        <DCSRow>
          <DCSColumn>
            <Bold>Categories</Bold>
            <TextDividerSolid2></TextDividerSolid2>
            {productCategories?.map((cat, key) => {
              return (
                <DisplayFlex key={key}>
                  {cat}
                </DisplayFlex>
              );
            })}
            <DisplayFlex>
              <input
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="New Category"
                name="category"
              />
              <button onClick={handleAddCategory}>Add Main Category</button>
            </DisplayFlex>
          </DCSColumn>
          <DCSColumn>
            <Bold>Sub Categories</Bold>
            <TextDividerSolid2></TextDividerSolid2>
            {productSubCategories?.map((cat, key) => {
              return (
                <DisplayFlex key={key}>
                    {cat}
                </DisplayFlex>
              );
            })}
            <DisplayFlex>
              <input
                type="text"
                value={formData.subCategory}
                onChange={handleChange}
                placeholder="New Sub Category"
                name="subCategory"
              />
              <button onClick={handleAddCategory}>Add Sub Category</button>
            </DisplayFlex>
          </DCSColumn>
          <DCSColumn>
            <Bold>Groups</Bold>
            <TextDividerSolid2></TextDividerSolid2>
            {productGroups?.map((cat, key) => {
              return (
                <DisplayFlex key={key}>
                    {cat}
                </DisplayFlex>
              );
            })}
            <DisplayFlex>
              <input
                type="text"
                value={formData.group}
                onChange={handleChange}
                placeholder="New Group"
                name="group"
              />
              <button onClick={handleAddCategory}>Add Group</button>
            </DisplayFlex>
          </DCSColumn>
        </DCSRow>
      </DashCatalogTableSection>
    </React.Fragment>
  );
}