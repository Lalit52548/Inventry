// PopupForm.js
import React from "react";

const Payment_Form = ({ formData, onClosePopup, onFormDataChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFormDataChange({ ...formData, [name]: value });
      };
    
      const handleAddWorkDetail = () => {
        onFormDataChange({
          ...formData,
          workDetails: [...formData.workDetails, { work: "", rate: "", amount: "" }]
        });
      };
    
      const handleAddLaborDetail = () => {
        onFormDataChange({
          ...formData,
          laborDetails: [...formData.laborDetails, { date: "", male: 0, female: 0, workDetail: "" }]
        });
      };
    
      const handleAddOtherBill = () => {
        onFormDataChange({
          ...formData,
          otherBills: [...formData.otherBills, { description: "", amount: 0 }]
        });
      };
    
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl relative">
            <button
              onClick={onClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
            <div
              className="max-h-[80vh] overflow-y-auto"
              style={{
                paddingRight: "0.5rem", // For better spacing when scrolling
              }}
            >
              <h2 className="text-xl font-bold mb-4">Add/Edit Weekly Payment Details</h2>
    
              <div className="mb-6">
                <label className="block mb-2">
                  <span className="text-gray-700">Supervisor Name:</span>
                  <input
                    type="text"
                    name="supervisorName"
                    value={formData.supervisorName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block mb-2">
                  <span className="text-gray-700">Site Name:</span>
                  <input
                    type="text"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block mb-2">
                  <span className="text-gray-700">Contractor Name:</span>
                  <input
                    type="text"
                    name="contractorName"
                    value={formData.contractorName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </div>
    
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Work Details</h3>
                {formData.workDetails.map((detail, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Work"
                      value={detail.work}
                      onChange={(e) => {
                        const newWorkDetails = [...formData.workDetails];
                        newWorkDetails[index].work = e.target.value;
                        onFormDataChange({ ...formData, workDetails: newWorkDetails });
                      }}
                      className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Rate"
                      value={detail.rate}
                      onChange={(e) => {
                        const newWorkDetails = [...formData.workDetails];
                        newWorkDetails[index].rate = e.target.value;
                        onFormDataChange({ ...formData, workDetails: newWorkDetails });
                      }}
                      className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Amount"
                      value={detail.amount}
                      onChange={(e) => {
                        const newWorkDetails = [...formData.workDetails];
                        newWorkDetails[index].amount = e.target.value;
                        onFormDataChange({ ...formData, workDetails: newWorkDetails });
                      }}
                      className="p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
                <button onClick={handleAddWorkDetail} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Add Work Detail
                </button>
              </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Labor Details</h3>
          {formData.laborDetails.map((detail, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mb-4">
              <input
                type="date"
                value={detail.date}
                onChange={(e) => {
                  const newLaborDetails = [...formData.laborDetails];
                  newLaborDetails[index].date = e.target.value;
                  onFormDataChange({ ...formData, laborDetails: newLaborDetails });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Male"
                value={detail.male}
                onChange={(e) => {
                  const newLaborDetails = [...formData.laborDetails];
                  newLaborDetails[index].male = e.target.value;
                  onFormDataChange({ ...formData, laborDetails: newLaborDetails });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Female"
                value={detail.female}
                onChange={(e) => {
                  const newLaborDetails = [...formData.laborDetails];
                  newLaborDetails[index].female = e.target.value;
                  onFormDataChange({ ...formData, laborDetails: newLaborDetails });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Work Detail"
                value={detail.workDetail}
                onChange={(e) => {
                  const newLaborDetails = [...formData.laborDetails];
                  newLaborDetails[index].workDetail = e.target.value;
                  onFormDataChange({ ...formData, laborDetails: newLaborDetails });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <button onClick={handleAddLaborDetail} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Labor Detail</button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Other Bills</h3>
          {formData.otherBills.map((bill, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Description"
                value={bill.description}
                onChange={(e) => {
                  const newOtherBills = [...formData.otherBills];
                  newOtherBills[index].description = e.target.value;
                  onFormDataChange({ ...formData, otherBills: newOtherBills });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Amount"
                value={bill.amount}
                onChange={(e) => {
                  const newOtherBills = [...formData.otherBills];
                  newOtherBills[index].amount = e.target.value;
                  onFormDataChange({ ...formData, otherBills: newOtherBills });
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <button onClick={handleAddOtherBill} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Other Bill</button>
        </div>

        <button
          onClick={onClosePopup}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Save & Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Payment_Form;