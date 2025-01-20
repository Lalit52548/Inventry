// import React, { useEffect, useState } from "react";
// import DataTable from "../Components/DataTable";
// import salesData from "../Services/sales_data.json";
// import AddSalesEntry from "./AddSalesEntry";
// import ViewEditSalesEntry from "./ViewEditSalesEntry";

// const DailySalesReport = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedEntry, setSelectedEntry] = useState(null);

//   useEffect(() => {
//     setData(salesData);
//   }, []);

//   const uniqueFromLocations = [...new Set(salesData.map((item) => item.from))];

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filteredData = filter
//     ? data.filter((item) => item.from === filter)
//     : data;

//   const columns = [
//     { label: "Actions", key: "actions" },
//     { label: "Sr No", key: "sr_no" },
//     { label: "Date", key: "date" },
//     { label: "From", key: "from" },
//     { label: "To", key: "to" },
//     { label: "Material", key: "material" },
//     { label: "Quantity", key: "quantity" },
//     { label: "Unit", key: "unit" },
//     { label: "Material Rate", key: "material_rate" },
//     { label: "Transportation Rate", key: "transportation_rate" },
//     { label: "Royalty Rate", key: "royalty_rate" },
//     { label: "Total", key: "total" },
//     { label: "Final Amount", key: "final_amount" },
//     { label: "Vehicle No", key: "vehicle_no" },
//     { label: "Royalty Status", key: "royalty_status" },
//     { label: "Cash/Credit Sales", key: "cash_credit_sales" },
//     { label: "Remark", key: "remark" },
//     { label: "ID No/ID Name", key: "id_no_id_name" },
//   ];

//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const closeAddModal = () => {
//     setIsAddModalOpen(false);
//   };

//   const openEditModal = (entry) => {
//     setSelectedEntry(entry);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setSelectedEntry(null);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Daily Sales Report</h1>

//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={openAddModal}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//         >
//           Add New Entry
//         </button>

//         <div>
//           <label htmlFor="filter" className="block mb-2 font-medium text-gray-700">
//             Filter by Location:
//           </label>
//           <select
//             id="filter"
//             value={filter}
//             onChange={handleFilterChange}
//             className="border border-gray-300 px-4 py-2 rounded-lg shadow w-64"
//           >
//             <option value="">All Locations</option>
//             {uniqueFromLocations.map((location) => (
//               <option key={location} value={location}>
//                 {location}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <DataTable
//         data={filteredData.map((item) => ({
//           ...item,
//           actions: (
//             <button
//               onClick={() => openEditModal(item)}
//               className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
//             >
//               Edit
//             </button>
//           ),
//         }))}
//         columns={columns}
//         tableClass="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden"
//         headerClass="bg-gray-800 text-white uppercase text-sm font-medium"
//         rowClass="border-b hover:bg-gray-100 transition duration-200"
//       />

//       {isAddModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg relative">
//             <AddSalesEntry closeModal={closeAddModal} />
//           </div>
//         </div>
//       )}

//       {isEditModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg relative">
//             <ViewEditSalesEntry entry={selectedEntry} closeModal={closeEditModal} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DailySalesReport;


import React, { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
import AddSalesEntry from "./AddSalesEntry";
import ViewEditSalesEntry from "./ViewEditSalesEntry";

const DailySalesReport = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch sales data from the server
  const fetchSalesData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://example.com/api/sales"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch sales data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  const uniqueFromLocations = [...new Set(data.map((item) => item.from))];

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

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    fetchSalesData(); // Refresh the data after adding a new entry
  };

  const openEditModal = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEntry(null);
    fetchSalesData(); // Refresh the data after editing an entry
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Daily Sales Report
      </h1>

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Add New Entry
        </button>

        <div>
          <label
            htmlFor="filter"
            className="block mb-2 font-medium text-gray-700"
          >
            Filter by Location:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow w-64"
          >
            <option value="">All Locations</option>
            {uniqueFromLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-600">Loading data...</div>
      ) : (
        <DataTable
          data={filteredData.map((item) => ({
            ...item,
            actions: (
              <button
                onClick={() => openEditModal(item)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
            ),
          }))}
          columns={columns}
          tableClass="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden"
          headerClass="bg-gray-800 text-white uppercase text-sm font-medium"
          rowClass="border-b hover:bg-gray-100 transition duration-200"
        />
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <AddSalesEntry closeModal={closeAddModal} />
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <ViewEditSalesEntry
              entry={selectedEntry}
              closeModal={closeEditModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DailySalesReport;
