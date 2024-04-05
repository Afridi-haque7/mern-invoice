import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import { Trash2, FilePenLine } from "lucide-react";


const ServiceTable = () => {
  return (
    <div>
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
    </div>
  );
}

export default ServiceTable;
