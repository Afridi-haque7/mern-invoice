import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Invoice = () => {
  return (
    <div className="p-3 bg-gray-100">
      <h3 className="text-2xl font-bold">Add Invoice</h3>
      <div className="form">
        <Form>
          <div className="md:flex justify-between p-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Invoice Number</Form.Label>
              <Form.Control type="text" placeholder="HHINV001238" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Ravi" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control type="date" placeholder="Select a date" />
            </Form.Group>
          </div>

          <div className="md:flex justify-between p-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" placeholder="Select a date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Reference Number</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </div>
          <div className="flex p-2 border">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Services</Form.Label>
              <Form.Control
                className="w-full"
                type="text"
                placeholder="Select Services"
              />
            </Form.Group>
          </div>

          <div>table</div>
          <div>table</div>
          <div className="flex gap-4">
            <Button variant="outline" className="border border-black" type="submit">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Invoice;
