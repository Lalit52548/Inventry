import React, { useState } from "react";

const WeeklyPayment = ({ formData, onOpenPopup }) => (
  <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-6">Weekly Payment Details - View</h1>
    <button
      onClick={onOpenPopup}
      className="px-4 py-2 bg-blue-500 text-white rounded-md mb-6"
    >
      Add/Edit Details
    </button>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      <p><strong>Supervisor Name:</strong> {formData.supervisorName}</p>
      <p><strong>Site Name:</strong> {formData.siteName}</p>
      <p><strong>Contractor Name:</strong> {formData.contractorName}</p>
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Work Details</h2>
      {formData.workDetails.map((detail, index) => (
        <div key={index} className="mb-2">
          <p><strong>Work:</strong> {detail.work}</p>
          <p><strong>Rate:</strong> {detail.rate}</p>
          <p><strong>Amount:</strong> {detail.amount}</p>
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Labor Details</h2>
      {formData.laborDetails.map((detail, index) => (
        <div key={index} className="mb-2">
          <p><strong>Date:</strong> {detail.date}</p>
          <p><strong>Male:</strong> {detail.male}</p>
          <p><strong>Female:</strong> {detail.female}</p>
          <p><strong>Work Detail:</strong> {detail.workDetail}</p>
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Other Bills</h2>
      {formData.otherBills.map((bill, index) => (
        <div key={index} className="mb-2">
          <p><strong>Description:</strong> {bill.description}</p>
          <p><strong>Amount:</strong> {bill.amount}</p>
        </div>
      ))}
    </div>
  </div>
);


export default WeeklyPayment;
