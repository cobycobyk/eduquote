import React, { useContext, useState } from "react"
import { Bold, DisplayFlex, TextDividerSolid2 } from "../../../assets/css/custom.styles";
import { QuoteTitle } from "../../../components/Quote/Quote.styles";
import { ProductsContext } from "../../../context/products.context";
import { UserContext } from "../../../context/user.context"
import { DashCatalogTableSection, DCSColumn, DCSRow } from "./DashCatalogs.styles";


export default function DashProductsSettings() {
  const { currentUserInfo } = useContext(UserContext);
  const { productCategories, productSubCategories, productGroups } = useContext(ProductsContext);
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({});
  
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!category.length) return setMessage('Please enter category name');
    if (productCategories.some((cat) => cat === formData.category)) return setMessage('Category already exists');
    if (productSubCategories.some((cat) => cat === formData.subCategory)) return setMessage('Sub Category already exists');
    if (productGroups.some((cat) => cat === formData.group)) return setMessage('Group already exists');
    // await addCatalogCategory(currentUserInfo, category);
    setCategory("");
  }
  const handleAddSubCategory = async (e) => {
    e.preventDefault();
    if (!subCategory.name.length) return setMessage('please enter a sub cateogry name');
    if (!subCategory.parent.length) return setMessage('no category parent found');
    catalogSubCategories.push(subCategory.name);
    await addCatalogSubCategory(currentUserInfo, subCategory);
    setSubCategory({name: "", parent: ""});
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleChangeSubCategory = (e) => {
    const { name, value } = e.target;
    setSubCategory({ ...subCategory, [name]: value });
  }
  console.log(catalogCategories)
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
            {catalogCategories?.map((cat, key) => {
              return (
                <DisplayFlex key={key}>
                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                </DisplayFlex>
              );
            })}
            <DisplayFlex>
              <input
                type="text"
                value={category}
                onChange={handleChangeCategory}
                placeholder="New Category"
              />
              <button onClick={handleAddCategory}>Add Main Category</button>
            </DisplayFlex>
          </DCSColumn>
          <DCSColumn>
            <Bold>Sub Categories</Bold>
            <TextDividerSolid2></TextDividerSolid2>
            {catalogSubCategories?.map((cat, key) => {
              return (
                <div key={key}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </div>
              );
            })}
            <DisplayFlex>
              <div>Parent:</div>
              <select
                value={subCategory.parent}
                name="parent"
                onChange={handleChangeSubCategory}
              >
                <option value="" disabled hidden>
                  Choose Parent Here
                </option>
                {catalogCategories?.map((cat, key) => {
                  return <option key={key}>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</option>;
                })}
              </select>
              <input
                type="text"
                name="name"
                value={subCategory.name}
                onChange={handleChangeSubCategory}
                placeholder="New Sub Category"
              />
              <button onClick={handleAddSubCategory}>Add Sub Category</button>
            </DisplayFlex>
          </DCSColumn>
        </DCSRow>
      </DashCatalogTableSection>
    </React.Fragment>
  );
}