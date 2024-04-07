import React, { useState, useEffect } from "react";
import { Trash2, FilePenLine } from "lucide-react";
import axios from "axios";
import Billing from "./Billing";

const ServiceTable = (props) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [qty, setQty] = useState(1);

  const [tableData, setTableData] = useState({
    amount: 0,
    discount: 0,
    tax: 0,
    total: 0,
  });

  // Function to fetching service data from the database, using axios.get() method.
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mern-invoice-zc6k.onrender.com/api/service/get"
      );
      setData(response.data);
      setSingleData(response.data[props.ind]);
      const amount = qty * response.data[props.ind].price;
      const discount =
        (response.data[props.ind].price *
          qty *
          response.data[props.ind].disValue) /
        100;
      const tax =
        (response.data[props.ind].price *
          qty *
          response.data[props.ind].taxRate) /
        100;
      const total = amount - discount + tax;
      setTableData({ amount, discount, tax, total });
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  };

  // Using useEffect hook to fetching data from database 
  useEffect(() => {
    fetchData();
  }, [props.ind, qty]);

  const [deleteData, setDeleteData] = useState(false);

  // Function to delete a particular item from the table and database using axios.delete() method.
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mern-invoice-zc6k.onrender.com/api/service/delete/${id}`
      );
      console.log("Tax details deleted:", id);
      alert("Service deleted successfully");
      setData((prevData) => prevData.filter((item) => item.id !== id));
      setDeleteData(true);
    } catch (error) {
      console.log("Error deleting item: ", error);
    }
    setDeleteData(false);
  };

  // Function to handle the calculation when user changes the product quantity
  const handleQtyChange = (event) => {
    const newQty = event.target.value;
    setQty(newQty);
  };


  return (
    <>
      <div className="overflow-x-scroll">
        <table className="table-auto w-full border mb-3 rounded-md  ">
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
          {/* Mapping data to show on the table */}
            {!deleteData && (
              <tr>
                <td>{singleData.type}</td>
                <td>
                  <input
                    type="number"
                    className="rounded-md h-8 w-20 border p-2"
                    defaultValue={qty}
                    min="1"
                    max="50"
                    onChange={handleQtyChange}
                  />
                </td>
                <td>&#x20b9;{tableData.amount.toFixed(2)}</td>
                <td>
                  &#x20b9;
                  {tableData.discount.toFixed(2)}
                </td>
                <td>
                  &#x20b9;
                  {tableData.tax.toFixed(2)}
                </td>
                <td>
                  &#x20b9;
                  {tableData.total.toFixed(2)}
                </td>
                <td>
                  <span className="flex gap-2">
                    <FilePenLine className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                    <Trash2
                      className="bg-gray-300 p-1 rounded-xl cursor-pointer"
                      onClick={() => handleDelete(singleData._id)}
                    />
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <hr />
      <Billing data={tableData} />
    </>
  );
};

export default ServiceTable;
