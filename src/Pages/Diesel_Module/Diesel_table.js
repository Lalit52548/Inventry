import React from "react";

const DieselTable = ({ dieselData, handleEdit, handleDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Sr. No</th>
          <th className="border border-gray-300 px-4 py-2">Vehicle No</th>
          <th className="border border-gray-300 px-4 py-2">Diesel Given</th>
          <th className="border border-gray-300 px-4 py-2">Balance Diesel</th>
          <th className="border border-gray-300 px-4 py-2">Opening Reading</th>
          <th className="border border-gray-300 px-4 py-2">Closing Reading</th>
          <th className="border border-gray-300 px-4 py-2">Total KM</th>
          <th className="border border-gray-300 px-4 py-2">Average (KM/L)</th>
          <th className="border border-gray-300 px-4 py-2">Remark</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {dieselData.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="border border-gray-300 px-4 py-2">{row.serialNo}</td>
            <td className="border border-gray-300 px-4 py-2">{row.vehicleNo}</td>
            <td className="border border-gray-300 px-4 py-2">{row.dieselGiven}</td>
            <td className="border border-gray-300 px-4 py-2">{row.balanceDiesel}</td>
            <td className="border border-gray-300 px-4 py-2">{row.openingReading}</td>
            <td className="border border-gray-300 px-4 py-2">{row.closingReading}</td>
            <td className="border border-gray-300 px-4 py-2">{row.totalKm}</td>
            <td className="border border-gray-300 px-4 py-2">{row.average.toFixed(2)}</td>
            <td className="border border-gray-300 px-4 py-2">{row.remark}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500 hover:underline mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DieselTable;
