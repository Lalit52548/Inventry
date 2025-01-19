import React from 'react';

const LabourDetails = ({ labour }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">Labour Details</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Qty</th>
            <th className="border border-gray-300 px-4 py-2">Rate</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {labour.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.qty}</td>
              <td className="border border-gray-300 px-4 py-2">{item.rate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabourDetails;
