import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Switch from "react-switch";

const AddTaxModal = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const taxName = event.target[0].value;
    const taxRate = event.target[1].value;
    const taxType = event.target[2].value;
    const taxStatus = event.target[3].value;

    const formData = [taxName, taxRate, taxType, taxStatus];
    console.log(formData);
    setValidated(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
  };

  return (
    <Modal
      open={props.state}
      onClose={props.handler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className=""
    >
      <Box sx={style}>
        <h3 className="text-[18px] md:text-xl">Add Tax</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>
              Tax Name <span className="text-red-500">&#42;</span>
            </Form.Label>
            <Form.Control type="text" placeholder="gst" required />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>
              Tax Rates <span className="text-red-500">&#42;</span>
            </Form.Label>
            <Form.Control type="number" placeholder="12" required />
          </Form.Group>

          <Form.Group className="mb-2 w-full">
            <Form.Label>
              Type <span className="text-red-500">&#42;</span>
            </Form.Label>
            <select
              id="type"
              name="type"
              required
              className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
            >
              <option value="Percentage">Percentage</option>
            </select>
          </Form.Group>

          <Form.Group>
            <div className="flex w-full justify-between">
              <Form.Label className="font-semibold">Status</Form.Label>
              <Switch
                onChange={handleChange}
                checked={checked}
                value={checked}
                className="align-middle ml-1 scale-75"
              />
            </div>
          </Form.Group>

          <div className="flex justify-end gap-2">
            <Button variant="outline-primary" className="" type="submit">
              Cancel
            </Button>
            <Button variant="primary" className="w-20" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Box>
    </Modal>
  );
};

export default AddTaxModal;
