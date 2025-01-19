import React, { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
import salesData from "../Services/sales_data.json";
import AddSalesEntry from "./AddSalesEntry";
import ViewEditSalesEntry from "./ViewEditSalesEntry";

const DailySalesReport = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    setData(salesData);
  }, []);

  const uniqueFromLocations = [...new Set(salesData.map((item) => item.from))];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = filter
    ? data.filter((item) => item.from === filter)
    : data;

  const columns = [
    { label: "Actions", key: "actions" },
    { label: "Sr No", key: "sr_no" },
    { label: "Date", key: "date" },
    { label: "From", key: "from" },
    { label: "To", key: "to" },
    { label: "Material", key: "material" },
    { label: "Quantity", key: "quantity" },
    { label: "Unit", key: "unit" },
    { label: "Material Rate", key: "material_rate" },
    { label: "Transportation Rate", key: "transportation_rate" },
    { label: "Royalty Rate", key: "royalty_rate" },
    { label: "Total", key: "total" },
    { label: "Final Amount", key: "final_amount" },
    { label: "Vehicle No", key: "vehicle_no" },
    { label: "Royalty Status", key: "royalty_status" },
    { label: "Cash/Credit Sales", key: "cash_credit_sales" },
    { label: "Remark", key: "remark" },
    { label: "ID No/ID Name", key: "id_no_id_name" },
  ];
  
  const openModal = () => {
            setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="p-6 bg-gray-100 w-full">
      <h1 className="text-2xl font-bold mb-4">Daily Sales Report</h1>

      <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
      >
          Open new Form
      </button>
      {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg">
                  <AddSalesEntry closeModal={closeModal} />
              </div>
          </div>
      )}

      <div className="mb-4">
        <label htmlFor="filter" className="block mb-2 font-medium">
          Filter by "Location":
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="">All Locations</option>
          {uniqueFromLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      

      
          <DataTable
        data={filteredData.map((item) => ({
          ...item,
          actions: (
            <button
              onClick={() => openEditModal(item)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          ),
        }))}
        columns={columns}
      />

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <ViewEditSalesEntry entry={selectedEntry} closeModal={closeEditModal} />
          </div>
        </div>
      )}
   
    </div>
  );
};

export default DailySalesReport;
