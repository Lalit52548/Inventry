import React from "react";

const AddSalesEntry = ({ closeModal }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        closeModal();
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Sales Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <label className="block">
                        <span className="text-gray-700">Date:</span>
                        <input type="date" name="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">From:</span>
                        <input type="text" name="from" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">To:</span>
                        <input type="text" name="to" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Material:</span>
                        <input type="text" name="material" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Quantity:</span>
                        <input type="number" name="quantity" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Unit:</span>
                        <input type="text" name="unit" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Material Rate:</span>
                        <input type="number" name="material_rate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Transportation Rate:</span>
                        <input type="number" name="transportation_rate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Royalty Rate:</span>
                        <input type="number" name="royalty_rate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Final Amount:</span>
                        <input type="number" name="final_amount" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Vehicle No:</span>
                        <input type="text" name="vehicle_no" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Royalty Status:</span>
                        <input type="text" name="royalty_status" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Cash/Credit Sales:</span>
                        <input type="text" name="cash_credit_sales" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Remark:</span>
                        <input type="text" name="remark" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">ID No/ID Name:</span>
                        <input type="text" name="id_no_id_name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSalesEntry;