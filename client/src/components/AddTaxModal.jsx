import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Switch from "react-switch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTaxModal = (props) => {
  const navigate = useNavigate();

  // Controls toogling of status icon of the Modal
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [validated, setValidated] = useState(false);

  // Handling the submit of Modal Form
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    // Defining formData array to store Form data from User
    const formData = {
      name: event.target[0].value,
      rate: event.target[1].value,
      type: event.target[2].value,
      status: event.target[3].value,
    };

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Posting formData to Tax Model in Database
    try {
      await axios
        .post("https://mern-invoice-zc6k.onrender.com/api/tax/post", formData)
        .then((response) => response.data)
        .then((data) => {
          console.log("Success:", data);
          alert("Successfully Data Added!");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("Error:", error.response.data);
    }

    setValidated(true);
    if (validated) navigate("/tax");
  };

  // Styling for Modal component when it is open
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
        <Form
          noValidate
          validated={validated}
          action="POST"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-2" >
            <Form.Label>
              Tax Name <span className="text-red-500">&#42;</span>
            </Form.Label>
            <Form.Control type="text" placeholder="gst" required />
          </Form.Group>

          <Form.Group className="mb-2" >
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
            <Button
              variant="outline-primary"
              className=""
              onClick={() => navigate("/services")}
            >
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
