import React, { useEffect, useState } from "react";
import { Trash2, FilePenLine } from "lucide-react";
import axios from "axios";

const TaxTable = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tax/get");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  };


  useEffect(() => {
    fetchData()
  }, [data]);

  // console.log(data);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tax/delete/${id}`);
      console.log("Tax details deleted:", id);
      alert('Data deleted successfully');
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error deleting item: ", error);
    }
  };

  return (
    <div className="mt-5 h-full w-full overflow-x-scroll rounded-sm">
      <table className="table-auto w-full border rounded-md relative">
        <thead className="w-full h-10 bg-gray-200 ">
          <tr className=" w-full border md:text-lg text-sm">
            <th>No.</th>
            <th>Name</th>
            <th>Tax Rate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr
              key={index}
              className="text-gray-500 w-full md:text-md text-sm border-b hover:bg-stone-100"
            >
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{`${i.rate}%`}</td>
              <td>
                {i.status === true ? (
                  <span className="text-green-500 bg-green-100 rounded-lg text-xs p-1">
                    Active
                  </span>
                ) : (
                  <span className="text-red-500 bg-red-100 rounded-lg text-xs p-1">
                    Inactive
                  </span>
                )}
              </td>
              <td>
                {
                  <span className="flex gap-2">
                    <FilePenLine className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
                    <Trash2
                      className="bg-gray-300 p-1 rounded-xl cursor-pointer"
                      onClick={() => handleDelete(i._id)}
                    />
                  </span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
