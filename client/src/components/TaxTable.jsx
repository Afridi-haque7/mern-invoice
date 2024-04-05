import React from "react";
import { EllipsisVertical } from "lucide-react";
import { useTable } from "react-table";

const data = [
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
          {data.map((i) => (
            <tr
              key={i.id}
              className="text-gray-500 w-full md:text-md text-sm border-b hover:bg-stone-100"
            >
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{`${i.rate}%`}</td>
              <td>
                {i.status === "Active" ? (
                  <span className="text-green-500 bg-green-100 rounded-lg text-xs p-1">
                    {i.status}
                  </span>
                ) : (
                  <span className="text-red-500 bg-red-100 rounded-lg text-xs p-1">
                    {i.status}
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
