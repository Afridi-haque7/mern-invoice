import React, { useState, useEffect } from "react";
import { Trash2, FilePenLine } from "lucide-react";
import axios from "axios";


const ServiceTable = (props) => {
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/service/get");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);


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
              <td>{i.type}</td>
              <td>
                <input
                  type="number"
                  className="rounded-md h-8 w-20 border p-2"
                  placeholder="1"
                />
              </td>
              <td>&#x20b9;{i.price.toFixed(2)}</td>
              <td>&#x20b9;{(i.price * i.disValue) / 100}</td>
              <td>&#x20b9;{(i.taxRate * i.price) / 100}</td>
              <td>
                &#x20b9;
                {(
                  i.price +
                  (i.taxRate * i.price) / 100 -
                  (i.disValue * i.price) / 100
                ).toFixed(2)}
              </td>
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
