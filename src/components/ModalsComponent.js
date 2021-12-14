import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ModalsComponent({
  isOpen,
  closeModal,
  fullname,
  nickname,
  age,
  hobby,
  updateData
}) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Modal show={isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Fullname : <strong>{fullname}</strong></span> <br />
            <span>Nickname : <strong>{nickname}</strong></span> <br />
            <span>Age : <strong>{age}</strong></span> <br />
            <span>Hobby : <strong>{hobby}</strong></span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => updateData}
            >
              Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}
