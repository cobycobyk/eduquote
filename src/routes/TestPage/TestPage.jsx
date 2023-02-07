import { MulticolorButton } from "../../components/Buttons/Buttons";
import { TestContainer } from "./TestPage.styles";
import { useEffect, useState } from "react";
import { DisplayFlex } from "../../assets/css/custom.styles";
import { ProductImgAdd } from "../DashboardPage/DashCatalogs/DashCatalogs.styles";
import { addImagesToProduct } from "../../utils/firebase";

export default function TestPage() {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const product = {
    sku: 'test_sku'
  };
  const [downloads, setDownloads] = useState([]);



  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  const handleImageChange = (event) => {
    console.log(event.target.files)
    console.log(images)
    setImages([...event.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    const a = await addImagesToProduct(product, images);
    setDownloads(a);
    console.log(a);
  }

  useEffect(() => {
    console.log(downloads)
  }, [downloads])

  return (
    <TestContainer>
      <MulticolorButton input="multi" />
      <input
        type="file"
        multiple
        accepts="image/*"
        onChange={handleImageChange}
      />
      <DisplayFlex>
        {imageUrls.map((imageSrc, key) => (
          <ProductImgAdd key={key} src={imageSrc} />
        ))}
      </DisplayFlex>
      <button onClick={handleSubmit}>submit</button>
      {downloads?.length && downloads.map((download, key) => {
        <img
          key={key}
          src={download}
          alt="download"
        />
      })}
    </TestContainer>
  );
}
