import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Services = () => {
  return (
    <div className="bg-gray-100 p-3 h-[100vh]">
      <h3 className="text-2xl font-bold">Add Invoice</h3>
      <div className="form">
        <Form>
          <div className="md:flex justify-between">
            <Form.Group
              className="mb-3 w-full md:w-[30%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>Service Type</Form.Label>
              {/* <Form.Control type="text" placeholder="HHINV001238" /> */}
              <select
                id="servicetype"
                name="currency"
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="cash">Hotel</option>
                <option value="card">Product</option>
              </select>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Selling Price</Form.Label>
              <span className="flex gap-1">
                <Form.Control type="text" placeholder="$1200" />
              </span>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Discount Type</Form.Label>
              {/* <Form.Control type="date" placeholder="Select a date" /> */}
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
          </div>
          <div className="md:flex justify-between w-[65%]">
            <Form.Group
              className="mb-3 w-full md:w-[46%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>Discount Value</Form.Label>
              <Form.Control type="text" placeholder="10" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[46%]"
              controlId="formBasicEmail"
            >
              <Form.Label>Tax</Form.Label>
              <select
                id="discount"
                name="discount"
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="cash">GST</option>
                <option value="card">Service Tax</option>
                <option value="upi">Service + GST</option>
              </select>
            </Form.Group>
          </div>

          <div className="flex justify-end gap-4 mt-5 border-t py-5">
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

export default Services;
