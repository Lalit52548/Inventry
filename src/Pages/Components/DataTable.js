import React from "react";

const DataTable = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3 px-6 text-left text-sm font-medium uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-6 text-sm">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
};

export default DataTable;
