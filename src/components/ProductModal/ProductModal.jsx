import React, {useState, useEffect} from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { PMContainer, PMDescContainer, PMImgMain, PMImgs, PMImgSmall, PMRow } from "./ProductModal.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";

export default function ProductModal({ modalOpen, modal, setModalOpen }) {
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    setMainImage(modal.image)
  }, [modal])

  return (
    <Modal isOpen={modalOpen} size="xl" fullscreen>
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        <PMRow>{modal.name}</PMRow>
      </ModalHeader>
      <ModalBody>
        <PMContainer>
          <PMImgs>
            <PMImgSmall
              src={modal.image}
              alt="product image small"
              onClick={() => setMainImage(modal.image)}
            />
          </PMImgs>
          <PMImgMain src={mainImage} alt="product image main" />
          <PMDescContainer>
            <h4>{modal.name}</h4>
            <h5>Price: {priceFormatter.format(modal.price)}</h5>
            <p>{modal.description}</p>
          </PMDescContainer>
        </PMContainer>
        <PMContainer>
          <div>Specifications:</div>
          
        </PMContainer>
      </ModalBody>
      <ModalFooter>
        Questions? Shoot us an email and we will get back to you right away
        info@quotebuilder.com
      </ModalFooter>
    </Modal>
  );
}
