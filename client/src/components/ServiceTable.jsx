import React from 'react'
import { Trash2, FilePenLine } from "lucide-react";

const data = [
  {
    service: "Hotel",
    rate: 1200,
    discount: 120,
    tax: 194.40,
    amount: 1274.40,
  },
];

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

          {data.map((i) => (
            <tr>
              <td>{i.service}</td>
              <td>
                <input
                  type="number"
                  className="rounded-md h-8 w-20 border p-2"
                  placeholder="1"
                />
              </td>
              <td>{i.rate}</td>
              <td>{i.discount}</td>
              <td>{i.tax}</td>
              <td>{i.amount}</td>
              <td>
                <span className="flex gap-2">
                  <FilePenLine className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                  <Trash2 className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;
