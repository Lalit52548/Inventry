// import React, { useState } from "react";
// import DieselForm from "./Diesel_Form";
// import DieselTable from "./Diesel_table";

// const DieselReport = () => {
//   const [dieselData, setDieselData] = useState([
//     {
//         serialNo: 1,
//         vehicleNo: "MH 31 8165",
//         dieselGiven: 10000,
//         balanceDiesel: 10000,
//         openingReading: 258369,
//         closingReading: 258479,
//         totalKm: 110,
//         average: 90.90909,
//         remark: "",
//       },
//       {
//         serialNo: 2,
//         vehicleNo: "MH 12 AB 1234",
//         dieselGiven: 8000,
//         balanceDiesel: 6000,
//         openingReading: 150250,
//         closingReading: 150390,
//         totalKm: 140,
//         average: 57.14286,
//         remark: "Checked",
//       },
//       {
//         serialNo: 3,
//         vehicleNo: "MH 14 XY 5678",
//         dieselGiven: 7000,
//         balanceDiesel: 5000,
//         openingReading: 200450,
//         closingReading: 200560,
//         totalKm: 110,
//         average: 63.63636,
//         remark: "",
//       },
//       {
//         serialNo: 4,
//         vehicleNo: "MH 40 ZT 9012",
//         dieselGiven: 12000,
//         balanceDiesel: 10000,
//         openingReading: 305600,
//         closingReading: 305780,
//         totalKm: 180,
//         average: 66.66667,
//         remark: "Good performance",
//       },
//       {
//         serialNo: 5,
//         vehicleNo: "MH 20 CD 3456",
//         dieselGiven: 5000,
//         balanceDiesel: 2000,
//         openingReading: 180300,
//         closingReading: 180420,
//         totalKm: 120,
//         average: 41.66667,
//         remark: "Under review",
//       },
//       {
//         serialNo: 6,
//         vehicleNo: "MH 15 GH 7890",
//         dieselGiven: 9000,
//         balanceDiesel: 7000,
//         openingReading: 250800,
//         closingReading: 250940,
//         totalKm: 140,
//         average: 64.28571,
//         remark: "",
//       },
//       {
//         serialNo: 7,
//         vehicleNo: "MH 10 KL 1122",
//         dieselGiven: 6000,
//         balanceDiesel: 4000,
//         openingReading: 500600,
//         closingReading: 500710,
//         totalKm: 110,
//         average: 54.54545,
//         remark: "Maintenance needed",
//       },
//       {
//         serialNo: 8,
//         vehicleNo: "MH 08 MN 3344",
//         dieselGiven: 11000,
//         balanceDiesel: 9000,
//         openingReading: 600150,
//         closingReading: 600310,
//         totalKm: 160,
//         average: 68.75,
//         remark: "Smooth running",
//       },
//       {
//         serialNo: 9,
//         vehicleNo: "MH 22 OP 5566",
//         dieselGiven: 9500,
//         balanceDiesel: 8500,
//         openingReading: 720200,
//         closingReading: 720340,
//         totalKm: 140,
//         average: 67.85714,
//         remark: "",
//       },
//       {
//         serialNo: 10,
//         vehicleNo: "MH 04 QR 7788",
//         dieselGiven: 7500,
//         balanceDiesel: 5500,
//         openingReading: 860900,
//         closingReading: 861020,
//         totalKm: 120,
//         average: 62.5,
//         remark: "Checked",
//       },
//   ]);

//   const [formData, setFormData] = useState({
//     serialNo: "",
//     vehicleNo: "",
//     dieselGiven: "",
//     balanceDiesel: "",
//     openingReading: "",
//     closingReading: "",
//     totalKm: "",
//     average: "",
//     remark: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       const updatedData = [...dieselData];
//       updatedData[editIndex] = formData;
//       setDieselData(updatedData);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setDieselData([...dieselData, { ...formData, serialNo: dieselData.length + 1 }]);
//     }
//     setFormData({
//       serialNo: "",
//       vehicleNo: "",
//       dieselGiven: "",
//       balanceDiesel: "",
//       openingReading: "",
//       closingReading: "",
//       totalKm: "",
//       average: "",
//       remark: "",
//     });
//     setIsModalOpen(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(dieselData[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (index) => {
//     const filteredData = dieselData.filter((_, i) => i !== index);
//     setDieselData(filteredData);
//   };

//   const openModal = () => {
//     setIsEditing(false);
//     setFormData({
//       serialNo: "",
//       vehicleNo: "",
//       dieselGiven: "",
//       balanceDiesel: "",
//       openingReading: "",
//       closingReading: "",
//       totalKm: "",
//       average: "",
//       remark: "",
//     });
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Daily Diesel Report</h2>
//       <button
//         onClick={openModal}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
//       >
//         Add New Record
//       </button>
//       <DieselTable
//         dieselData={dieselData}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//       />
//       {isModalOpen && (
//         <DieselForm
//           formData={formData}
//           handleChange={handleChange}
//           handleSubmit={handleSubmit}
//           isEditing={isEditing}
//           closeModal={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default DieselReport;


import React, { useState, useEffect } from "react";
import DieselForm from "./Diesel_Form";
import DieselTable from "./Diesel_table";

const DieselReport = () => {
  const [dieselData, setDieselData] = useState([]);
  const [formData, setFormData] = useState({
    serialNo: "",
    vehicleNo: "",
    dieselGiven: "",
    balanceDiesel: "",
    openingReading: "",
    closingReading: "",
    totalKm: "",
    average: "",
    remark: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // API base URL (replace with your actual backend URL)
  const API_URL = "https://api.example.com/diesel";

  // Fetch diesel data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch diesel data");
        }
        const data = await response.json();
        setDieselData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching diesel records.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${formData.serialNo}` : API_URL;

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();

      if (isEditing) {
        const updatedData = dieselData.map((item) =>
          item.serialNo === formData.serialNo ? result : item
        );
        setDieselData(updatedData);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setDieselData([...dieselData, result]);
      }

      alert(`Record ${isEditing ? "updated" : "added"} successfully`);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save data.");
    }
  };

  // Handle edit record
  const handleEdit = (index) => {
    setFormData(dieselData[index]);
    setIsEditing(true);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Handle delete record
  const handleDelete = async (index) => {
    const recordToDelete = dieselData[index];

    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const response = await fetch(`${API_URL}/${recordToDelete.serialNo}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete record");
      }

      setDieselData(dieselData.filter((_, i) => i !== index));
      alert("Record deleted successfully.");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete record.");
    }
  };

  // Open modal for adding new record
  const openModal = () => {
    setIsEditing(false);
    setFormData({
      serialNo: "",
      vehicleNo: "",
      dieselGiven: "",
      balanceDiesel: "",
      openingReading: "",
      closingReading: "",
      totalKm: "",
      average: "",
      remark: "",
    });
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Daily Diesel Report</h2>
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
      >
        Add New Record
      </button>

      {loading ? (
        <p className="text-center">Loading diesel records...</p>
      ) : (
        <DieselTable dieselData={dieselData} handleEdit={handleEdit} handleDelete={handleDelete} />
      )}

      {isModalOpen && (
        <DieselForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default DieselReport;
