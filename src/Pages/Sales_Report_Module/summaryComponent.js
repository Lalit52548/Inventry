import React from 'react';

const Summary = ({ waterTanker, miscBill }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <p><strong>Water Tanker:</strong> {waterTanker.nos} nos @ {waterTanker.rate}/unit</p>
        <p className="font-bold">Amount: {waterTanker.amount}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p><strong>Miscellaneous Bill:</strong></p>
        <p className="font-bold">{miscBill}</p>
      </div>
    </div>
  );
};

export default Summary;
