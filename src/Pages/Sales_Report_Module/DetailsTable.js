import React from 'react';

const DetailsTable = ({ details }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Sr. No</th>
            <th className="border border-gray-300 px-4 py-2">Name of Particulars</th>
            <th className="border border-gray-300 px-4 py-2">Length</th>
            <th className="border border-gray-300 px-4 py-2">Width</th>
            <th className="border border-gray-300 px-4 py-2">Thickness</th>
            <th className="border border-gray-300 px-4 py-2">Contents of Area</th>
            <th className="border border-gray-300 px-4 py-2">Unit</th>
            <th className="border border-gray-300 px-4 py-2">Rate</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.sr_no}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name_of_particulars}</td>
              <td className="border border-gray-300 px-4 py-2">{item.length}</td>
              <td className="border border-gray-300 px-4 py-2">{item.width}</td>
              <td className="border border-gray-300 px-4 py-2">{item.thickness}</td>
              <td className="border border-gray-300 px-4 py-2">{item.contents_of_area}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unit}</td>
              <td className="border border-gray-300 px-4 py-2">{item.rate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
