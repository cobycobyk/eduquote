import { MulticolorButton } from "../../components/Buttons/Buttons";
import { TestContainer } from "./TestPage.styles";
import { useEffect, useState } from "react";
import { DisplayFlex } from "../../assets/css/custom.styles";
import { deleteAllImagesFromProduct } from "../../utils/firebase";

export default function TestPage() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const a = await deleteAllImagesFromProduct()
    console.log(a)
  }

  return (
    <TestContainer>
      <MulticolorButton input="multi" />
      <DisplayFlex>
      </DisplayFlex>
      <button onClick={handleSubmit}>submit</button>
    </TestContainer>
  );
}
