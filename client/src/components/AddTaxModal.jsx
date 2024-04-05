import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Switch from "react-switch";

const AddTaxModal = (props) => {

        // const handleOpen = () => setOpen(true);
        // const handleClose = props.handleClose;

        const [checked, setChecked] = useState(true);
        const handleChange = (nextChecked) => {
          setChecked(nextChecked);
        };

        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

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

          <Form.Group className="mb-2 w-full" controlId="formBasicEmail">
            <Form.Label>
              Type <span className="text-red-500">&#42;</span>
            </Form.Label>
            <select
              id="discount"
              name="discount"
              required
              className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
            >
              <option value="cash">Percentage</option>
              <option value="card">Percentile</option>
              <option value="upi">Amount</option>
            </select>
          </Form.Group>

          <div>
            <p className="flex w-full justify-between">
              <span className="font-semibold">Status</span>
              <span>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  className="align-middle ml-1 scale-75"
                />
              </span>
            </p>
          </div>
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
}

export default AddTaxModal
