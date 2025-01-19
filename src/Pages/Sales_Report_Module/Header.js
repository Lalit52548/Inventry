import React from 'react';

const Header = ({ data }) => {
  return (
    <div className="p-6 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-center">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <p><strong>Division:</strong> {data.division}</p>
        <p><strong>Date:</strong> {data.date}</p>
        <p><strong>Supervisor:</strong> {data.supervisor}</p>
        <p><strong>Agency:</strong> {data.agency}</p>
        <p><strong>Work Executed:</strong> {data.work_executed}</p>
      </div>
    </div>
  );
};

export default Header;
