import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Switch from "react-switch";

const AddTaxModal = (props) => {
        const [open, setOpen] = useState(false);

        // const handleOpen = () => setOpen(true);
        // const handleClose = props.handleClose;

        const [checked, setChecked] = useState(true);
        const handleChange = (nextChecked) => {
          setChecked(nextChecked);
        };

        const style = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        };


  return (
    <Modal
      open={props.state}
      onClose={props.handler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3>Add Tax</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tax Name</Form.Label>
            <Form.Control type="text" placeholder="gst" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tax Rates</Form.Label>
            <Form.Control type="number" placeholder="12" />
          </Form.Group>

          <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
            <Form.Label>Type</Form.Label>
            <select
              id="discount"
              name="discount"
              className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
            >
              <option value="cash">Percentage</option>
              <option value="card">Percentile</option>
              <option value="upi">Amount</option>
            </select>
          </Form.Group>

          <div>
            <p className="flex justify-between">
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
