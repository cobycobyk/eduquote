import React, {useState} from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

export default function ProductModal({modalOpen, modal, setModalOpen, setModal}) {
  return (
    <Modal
      isOpen={modalOpen}
      size="xl"
      fullscreen
    >
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        <div>{modal.name}</div>
      </ModalHeader>
      <ModalBody>
        <img src={modal.image} width={96} alt="templateimage" />
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
}
