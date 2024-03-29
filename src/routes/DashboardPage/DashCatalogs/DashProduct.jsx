import React, {useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { CardTitlee, CardTitleeDark, FormLabel, Formm, SignupCard, SignupCardDark, SignupColumn, SignupColumnFull, SignupInput, SignupLabelRow, SignupLabelRowDark, SignupRow, SignupTextArea } from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger, DisplayFlex, SaveButton } from "../../../assets/css/custom.styles";
import { ProductImgAdd } from "./DashCatalogs.styles";

export default function DashProduct({setCurrentPage}) {
  const location = useLocation();
  const product = location.state?.data;
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(`${product.name} Product`)
  }, [])

  const handleClick = () => {
    console.log('edit')
    navigate(`/dashboard/products/${product.sku}/edit`, {state: {data: product},})
  }

  return (
    <React.Fragment>
      <SignupCardDark>
        <CardTitleeDark>PRODUCT INFORMATION</CardTitleeDark>
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
              value={product.name}
              name="name"
              id="name"
              placeholder="Name"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                SKU <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="sku"
              value={product.sku}
              id="sku"
              placeholder="SKU"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                Category <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="category"
              value={product.category}
              id="category"
              placeholder="Category"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                Sub Category <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="subCategory"
              value={product.subCategory}
              id="subCategory"
              placeholder="Sub Category"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                Group <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="group"
              value={product.group}
              id="group"
              placeholder={product.group}
              required
              disabled
              errorMessage=""
              readOnly
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
              value={product.price}
              id="price"
              placeholder="Price"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.FileText />
              <FormLabel>
                Description <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupTextArea
              type="text"
              name="description"
              value={product.description}
              id="description"
              placeholder="Description"
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.Camera />
              <FormLabel>
                Images <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <DisplayFlex>
              {product.images.map((imageSrc, key) => (
                <ProductImgAdd key={key} src={imageSrc} />
              ))}
            </DisplayFlex>
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRowDark>
              <Icon.UserCheck />
              <FormLabel>
                Status <Danger>*</Danger>
              </FormLabel>
            </SignupLabelRowDark>
            <SignupInput
              type="text"
              name="status"
              value={product?.status}
              id="status"
              placeholder={product?.status}
              required
              disabled
              errorMessage=""
              readOnly
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupColumnFull>
              <SaveButton onClick={handleClick}>Edit Product Info</SaveButton>
            </SignupColumnFull>
          </SignupColumn>
        </SignupRow>
      </SignupCardDark>
    </React.Fragment>
  );
}