import { MulticolorButton } from "../../components/Buttons/Buttons";
import { TestContainer } from "./TestPage.styles";
import { useEffect, useState } from "react";
import { deleteAllImagesFromProduct } from "../../utils/firebase";
import { TableCard, TableCardBody, TableContainer, TBodyDark, TDDark, THDark, THeadDark, TRDark } from "../../assets/css/table.styles";

export default function TestPage() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const a = await deleteAllImagesFromProduct()
    console.log(a)
  }

  return (
  <TestContainer>
    <TableCard>
      <TableCardBody>
          <TableContainer>
            <THeadDark>
              <TRDark>
                <THDark>First</THDark>
                <THDark>Secondfffffdsafsadfasfdasfdsadfsadfsdaf</THDark>
                <THDark>Third</THDark>
                <THDark>Fourth</THDark>
              </TRDark>
            </THeadDark>
            <TBodyDark>
              <TRDark>
                <TDDark>body</TDDark>
                <TDDark>body2</TDDark>
                <TDDark>body3</TDDark>
                <TDDark>body4</TDDark>
              </TRDark>
              <TRDark>
                <TDDark>body</TDDark>
                <TDDark>body2</TDDark>
                <TDDark>body3fdsafasdfdsadfsafdsafasdsafsdfasfsdafsasdfaasdfsafsadfsdafasfdsasdafasdfasfdsafdassadfasfdasfdasdfasfdasfd</TDDark>
                <TDDark>body4</TDDark>
              </TRDark>
            </TBodyDark>
          </TableContainer>
      </TableCardBody>
    </TableCard>
  </TestContainer>
  );
}
