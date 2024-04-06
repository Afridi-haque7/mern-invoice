import React,{useEffect} from "react";
import { EllipsisVertical } from "lucide-react";
import { useTable } from "react-table";
import useFetch from "../hooks/useFetch";

const arr = [
  {
    id: 1,
    name: "GST",
    rate: 18,
    status: "Active",
  },
  {
    id: 2,
    name: "ServiceChrg+GST",
    rate: 18,
    status: "Active",
  },
  {
    id: 3,
    name: "GST",
    rate: 12,
    status: "Active",
  },
  {
    id: 4,
    name: "GST",
    rate: 5,
    status: "Inactive",
  },
];

const TaxTable = () => {
  const { data } = useFetch("http://localhost:8000/api/get");
  // console.log(data);

  useEffect(() => {

  },[])
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
              <td>{index+1}</td>
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
                  <EllipsisVertical className="bg-gray-300 p-1 rounded-xl cursor-pointer" />
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
