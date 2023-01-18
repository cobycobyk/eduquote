import React, {useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { CardTitlee, FormLabel, Formm, SignupCard, SignupColumn, SignupColumnFull, SignupInput, SignupLabelRow, SignupRow } from "../../SignupPage/SignupPage.styles";
import * as Icon from "react-feather";
import { Danger, SaveButton } from "../../../assets/css/custom.styles";
import DashCatalogTable from "./DashCatalogTable";

export default function DashCatalog({setCurrentPage}) {
  const location = useLocation();
  const catalog = location.state?.data;
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(`${catalog.name} Catalog`)
  }, [])

  const handleClick = () => {
    console.log('edit')
    navigate(`/dashboard/catalogs/${catalog.category}/edit`, {state: {data: catalog},})
  }

  return (
    <React.Fragment>
      <SignupCard>
        <CardTitlee>Catalog Information</CardTitlee>
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
                value={catalog.name}
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
              <SignupLabelRow>
                <Icon.UserCheck />
                <FormLabel>
                  Category <Danger>*</Danger>
                </FormLabel>
              </SignupLabelRow>
              <SignupInput
                type="text"
                name="category"
                value={catalog.category}
                id="category"
                placeholder="Category"
                required
                disabled
                errorMessage=""
                readOnly
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
                value={catalog.company}
                id="sku"
                placeholder={catalog.company}
                required
                disabled
                errorMessage=""
                readOnly
              />
            </SignupColumn>
            <SignupColumn>
              <SignupColumnFull>
                <SaveButton onClick={handleClick}>Edit Catalog Info</SaveButton>
              </SignupColumnFull>
            </SignupColumn>
          </SignupRow>
      </SignupCard>
      <DashCatalogTable catalog={catalog}/>
    </React.Fragment>
  );
}