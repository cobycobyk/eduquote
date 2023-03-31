import React, {useState, useEffect} from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { PMContainer, PMDescContainer, PMImgMain, PMImgs, PMImgSmall, PMRow, PMH4, PMH5, PMP } from "./ProductModal.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";
import {TextDividerSolid2Dark} from '../../assets/css/custom.styles'

export default function ProductModal({ modalOpen, modal, setModalOpen }) {
  const [mainImage, setMainImage] = useState();
  const [otherImages, setOtherImages] = useState([]);

  useEffect(() => {
    modal?.images?.length && setMainImage(modal.images[0]);
    modal?.images?.length && setOtherImages(modal.images)
  }, [modal])

  return (
    <Modal isOpen={modalOpen} size="xl" fullscreen>
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        <PMRow>{modal.name}</PMRow>
      </ModalHeader>
      <ModalBody>
        <PMContainer>
          <PMImgs>
            {otherImages.map((image, key) => {
              return <PMImgSmall
              key={key}
              src={image}
              alt="product image small"
              onClick={() => setMainImage(image)}
            />
            })}
          </PMImgs>
          <PMImgMain src={mainImage} alt="product image main" />
          <PMDescContainer>
            <PMH4>{modal.name}</PMH4>
            <TextDividerSolid2Dark></TextDividerSolid2Dark>
            <PMH5>{priceFormatter.format(modal.price)}</PMH5>
            <PMP>{modal.description}</PMP>
          </PMDescContainer>
        </PMContainer>
      </ModalBody>
      <ModalFooter>
        Questions? Shoot us an email and we will get back to you right away
        info@quotebuilder.com
      </ModalFooter>
    </Modal>
  );
}
