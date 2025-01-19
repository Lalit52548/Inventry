import React, { useState } from "react";
import ReactDOM from "react-dom";

const ConstructionReportForm = ({ onSubmit, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    division: "",
    date: "",
    supervisor: "",
    agency: "",
    workExecuted: "",
    details: [],
    labourDetails: [],
    waterTanker: { nos: "", rate: "", amount: "" },
    miscBill: "",
  });

  const [detail, setDetail] = useState({
    sr_no: "",
    name_of_particulars: "",
    length: "",
    width: "",
    thickness: "",
    contents_of_area: "",
    unit: "",
    rate: "",
    total: "",
  });

  const [labour, setLabour] = useState({
    type: "",
    qty: "",
    rate: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const handleLabourChange = (e) => {
    const { name, value } = e.target;
    setLabour({ ...labour, [name]: value });
  };

  const addDetail = () => {
    setFormData({ ...formData, details: [...formData.details, detail] });
    setDetail({
      sr_no: "",
      name_of_particulars: "",
      length: "",
      width: "",
      thickness: "",
      contents_of_area: "",
      unit: "",
      rate: "",
      total: "",
    });
  };

  const addLabour = () => {
    setFormData({ ...formData, labourDetails: [...formData.labourDetails, labour] });
    setLabour({ type: "", qty: "", rate: "", amount: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Construction Report Form</h2>
          <button onClick={onClose} className="text-red-500 text-lg font-bold">
            &times;
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <h3 className="text-lg font-semibold">General Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Report Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="division"
              placeholder="Division"
              value={formData.division}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="supervisor"
              placeholder="Supervisor Name"
              value={formData.supervisor}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="agency"
              placeholder="Agency"
              value={formData.agency}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <textarea
              name="workExecuted"
              placeholder="Work Executed"
              value={formData.workExecuted}
              onChange={handleInputChange}
              className="border p-2 rounded col-span-2"
            />
          </div>

          <h3 className="text-lg font-semibold">Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {["sr_no", "name_of_particulars", "length", "width", "thickness", "contents_of_area", "unit", "rate", "total"].map(
              (field, index) => (
                <input
                  key={index}
                  type="text"
                  name={field}
                  placeholder={field.replace("_", " ").toUpperCase()}
                  value={detail[field]}
                  onChange={handleDetailChange}
                  className="border p-2 rounded"
                />
              )
            )}
            <button
              type="button"
              onClick={addDetail}
              className="bg-blue-500 text-white py-2 px-4 rounded col-span-2"
            >
              Add Detail
            </button>
          </div>

          <h3 className="text-lg font-semibold">Labour Details</h3>
          <div className="grid grid-cols-3 gap-4">
            {["type", "qty", "rate", "amount"].map((field, index) => (
              <input
                key={index}
                type="text"
                name={field}
                placeholder={field.toUpperCase()}
                value={labour[field]}
                onChange={handleLabourChange}
                className="border p-2 rounded"
              />
            ))}
            <button
              type="button"
              onClick={addLabour}
              className="bg-blue-500 text-white py-2 px-4 rounded col-span-3"
            >
              Add Labour
            </button>
          </div>

          <h3 className="text-lg font-semibold">Water Tanker & Miscellaneous</h3>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="waterTankerNos"
              placeholder="No. of Tankers"
              value={formData.waterTanker.nos}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  waterTanker: { ...formData.waterTanker, nos: e.target.value },
                })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="waterTankerRate"
              placeholder="Rate"
              value={formData.waterTanker.rate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  waterTanker: { ...formData.waterTanker, rate: e.target.value },
                })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="waterTankerAmount"
              placeholder="Amount"
              value={formData.waterTanker.amount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  waterTanker: { ...formData.waterTanker, amount: e.target.value },
                })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="miscBill"
              placeholder="Miscellaneous Bill"
              value={formData.miscBill}
              onChange={handleInputChange}
              className="border p-2 rounded col-span-3"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConstructionReportForm;
