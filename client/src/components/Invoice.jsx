import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import { Trash2, FilePenLine } from "lucide-react";

const Invoice = () => {
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
                <Button>Add</Button>
              </span>
            </Form.Group>
          </div>

          <table className="table-auto w-full border mb-3 rounded-md ">
            <thead className="w-full border-b h-10">
              <tr>
                <th>Product/Service</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Discount</th>
                <th>Tax</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white px-10">
              <tr className="h-20">
                <td>Hotel</td>
                <td>
                  <input
                    type="number"
                    className="rounded-md h-8 w-20 border p-2"
                    placeholder="1"
                  />
                </td>
                <td>$1200.00</td>
                <td>$120.00</td>
                <td>$194.40</td>
                <td>$1274.40</td>
                <td>
                  <span className="flex gap-2">
                    <FilePenLine className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                    <Trash2 className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <hr />
          <div className="border rounded-lg p-4 md:w-[50%] mb-5">
            <p className="flex justify-between">
              <span className="text-gray-500 text-md font-semibold">
                Amount
              </span>
              <span className="text-gray-700 text-md font-semibold">
                $1200.00
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 text-md font-semibold">
                Discount
              </span>
              <span className="text-gray-700 text-md font-semibold">
                $120.00
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 text-md font-semibold">
                Tax
              </span>
              <span className="text-gray-700 text-md font-semibold">
                $194.40
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 text-md font-semibold">
                Round off
              </span>
              <span className="text-gray-700 text-md font-semibold">
                $0.00
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-800 text-lg font-semibold">
                Total Amount
              </span>
              <span className="text-gray-800 text-lg font-semibold">
                $1274.40
              </span>
            </p>
          </div>
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
