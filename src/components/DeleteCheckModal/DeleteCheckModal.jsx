import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
export default function DeleteCheckModal({openDelete, setOpenDelete, handleDelete}) {
  return (
    <Modal isOpen={openDelete}>
      <ModalBody>
        Are you sure you want to delete?
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setOpenDelete(!openDelete)}>Cancel</button>
      </ModalBody>
    </Modal>
  )
}
