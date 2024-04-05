import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
// import InputGroup from "react-bootstrap/InputGroup";
// import SplitButton from "react-bootstrap/SplitButton";
import Billing from "../components/Billing";
import ServiceTable from "../components/ServiceTable";
import { useNavigate } from "react-router-dom";



const Invoice = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services');
  }
  return (
    <div className="p-3  bg-gray-100">
      <h3 className="text-2xl font-bold">Add Invoice</h3>
      <div className="form">
        <Form>
          <div className="md:flex justify-between">
            <Form.Group
              className="mb-3 w-full md:w-[30%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>Invoice Number</Form.Label>
              <Form.Control type="text" placeholder="HHINV001238" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Customer Name</Form.Label>
              <span className="flex gap-1">
                <Form.Control type="text" placeholder="Ravi" />
                <Button>Add</Button>
              </span>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control type="date" placeholder="Select a date" />
            </Form.Group>
          </div>

          <div className="md:flex justify-between">
            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" placeholder="Select a date" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Reference Number</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Payment Method</Form.Label>
              {/* <Form.Control type="text" placeholder="" /> */}
              <br />
              <select
                id="currency"
                name="currency"
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="cash">Cash</option>
                <option value="card">Credit Card</option>
                <option value="upi">UPI</option>
              </select>
            </Form.Group>
          </div>
          <div className="flex">
            <Form.Group className="mb-5 w-full" controlId="formBasicEmail">
              <Form.Label>Services</Form.Label>
              <span className="flex gap-1">
                {/* <Form.Control
                  className="w-full"
                  type="text"
                  placeholder="Select Services"
                /> */}
                <select
                  id="currency"
                  name="currency"
                  className="rounded-md border bg-white w-full h-10 py-0 px-2 pl-2 pr-7 focus:ring-2 focus:ring-inset"
                >
                  <option value="cash">Hotel</option>
                  <option value="card"></option>
                  <option value="upi"></option>
                </select>
                <Button onClick={handleClick} >Add</Button>
              </span>
            </Form.Group>
          </div>

          <ServiceTable />

          <hr />
          <Billing />

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              className="border border-black"
              type="submit"
            >
              Cancel
            </Button>
            <Button variant="primary" className="w-20" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Invoice;
