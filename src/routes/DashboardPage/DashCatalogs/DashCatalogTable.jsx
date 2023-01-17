import React, {useState, useEffect, useContext} from "react"
import { Tbody, Td, Th, Thead, Tr } from "../../../components/ConfirmQuoteModal/ConfirmQuoteModal.styles";
import { QAButton, QAInput, QuoteAddContainer, QuoteSection, QuoteTitle } from "../../../components/Quote/Quote.styles";
import { UserContext } from "../../../context/user.context";
import { addCatalogItem } from "../../../utils/firebase";
import { priceFormatter } from "../../../utils/helperFunctions/PriceFormatter";
import { DTable } from "../DashboardPage.styles";
import { DashCatalogTableInput, DashCatalogTableSection, DTButton } from "./DashCatalogs.styles";

const defaultFormData = {
  image: "",
  name: "",
  sku: "",
  category: "",
  description: "",
  price: "",
}

export default function DashCatalogTable({ catalog }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [items, setItems] = useState(catalog?.items);
  const { currentUserInfo } = useContext(UserContext);
  
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleAddProduct = async () => {
    setItems([...items, formData]);
    await addCatalogItem(currentUserInfo, catalog, formData);
    setFormData(defaultFormData);
  }
  const handleDeleteProduct = () => {
    console.log('delete product')
  }

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <React.Fragment>
      <DashCatalogTableSection>
        <QuoteTitle>Catalog Items</QuoteTitle>
        <DTable>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>SKU</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          {items?.length ? (
            <Tbody>
              {items?.map((item, key) => {
                return (
                  <Tr key={key}>
                    <Th>
                      <img src={item.image} width={54} />
                    </Th>
                    <Td>{item.name}</Td>
                    <Td>{item.sku}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.description}</Td>
                    <Td>{priceFormatter.format(item.price)}</Td>
                    <Td>
                      <QuoteAddContainer>
                        <DTButton onClick={handleDeleteProduct}>
                          Delete
                        </DTButton>
                      </QuoteAddContainer>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          ) : (
            <div>No Products</div>
          )}
          <Tbody>
            <Tr>
              <Th>
                <DashCatalogTableInput
                  placeholder="Image"
                  type="text"
                  value={formData.image}
                  name="image"
                  onChange={handleChange}
                  />
              </Th>
              <Td>
                <DashCatalogTableInput
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  required
                  />
              </Td>
              <Td>
                <DashCatalogTableInput
                  placeholder="SKU"
                  type="text"
                  value={formData.sku}
                  name="sku"
                  onChange={handleChange}
                  required
                  />
              </Td>
              <Td>
                <DashCatalogTableInput
                  placeholder="Category"
                  type="text"
                  value={formData.category}
                  name="category"
                  onChange={handleChange}
                  required
                  />
              </Td>
              <Td>
                <DashCatalogTableInput
                  placeholder="Description"
                  type="text"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
                  required
                  />
              </Td>
              <Td>
                <DashCatalogTableInput
                  placeholder="Price"
                  type="text"
                  value={formData.price}
                  name="price"
                  onChange={handleChange}
                  required
                />
              </Td>
              <Td>
                <QuoteAddContainer>
                  <DTButton onClick={handleAddProduct}>Add Product</DTButton>
                </QuoteAddContainer>
              </Td>
            </Tr>
          </Tbody>
        </DTable>
      </DashCatalogTableSection>
    </React.Fragment>
  );
}