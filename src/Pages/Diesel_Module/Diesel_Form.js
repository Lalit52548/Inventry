import React from "react";

const DieselForm = ({ formData, handleChange, handleSubmit, isEditing, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-lg w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Record" : "Add New Record"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="vehicleNo"
            placeholder="Vehicle No"
            value={formData.vehicleNo}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="dieselGiven"
            placeholder="Diesel Given"
            value={formData.dieselGiven}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="balanceDiesel"
            placeholder="Balance Diesel"
            value={formData.balanceDiesel}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="openingReading"
            placeholder="Opening Reading"
            value={formData.openingReading}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="closingReading"
            placeholder="Closing Reading"
            value={formData.closingReading}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="totalKm"
            placeholder="Total KM"
            value={formData.totalKm}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="average"
            placeholder="Average (KM/L)"
            value={formData.average}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="remark"
            placeholder="Remark"
            value={formData.remark}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            {isEditing ? "Update Record" : "Add Record"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DieselForm;
