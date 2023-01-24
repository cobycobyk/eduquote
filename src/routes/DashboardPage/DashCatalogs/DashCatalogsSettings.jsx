import React, { useContext, useState } from "react"
import { Bold, DisplayFlex } from "../../../assets/css/custom.styles";
import { QuoteAddContainer, QuoteTitle } from "../../../components/Quote/Quote.styles";
import { ProductsContext } from "../../../context/products.context";
import { UserContext } from "../../../context/user.context"
import { addCatalogCategory } from "../../../utils/firebase";
import { DTable, Th, Thead, Tr } from "../DashboardPage.styles";
import { DashCatalogTableSection, DTButton } from "./DashCatalogs.styles";


export default function DashCatalogsSettings() {
  const { currentUserInfo } = useContext(UserContext);
  const { catalogCategories, catalogSubCategories } = useContext(ProductsContext);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (category === null) return;
    await addCatalogCategory(currentUserInfo);
    setCategory(null);
  }

  const handleChange = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }
  console.log(catalogSubCategories)
  return (
    <React.Fragment>
      <DashCatalogTableSection>
        <QuoteTitle>Catalog Categories</QuoteTitle>
          <DisplayFlex>
            <Bold> Catalog Category</Bold>
          </DisplayFlex>
          {catalogCategories?.length ? (
              catalogCategories?.map((category, key) => {
                return (
                  <DisplayFlex key={key}>
                    <div>
                      {category.name}
                    </div>
                  </DisplayFlex>
                );
              })
          ) : (
            <div>No Categories Yet</div>
          )}
          <DisplayFlex>
              <div>
                <input
                  placeholder="Category"
                  type="text"
                  value={category}
                  onChange={handleChange}
                />
              </div>
                <QuoteAddContainer>
                  <DTButton onClick={handleAddCategory}>Add Category</DTButton>
                </QuoteAddContainer>
          </DisplayFlex>
      </DashCatalogTableSection>
    </React.Fragment>
  );
}