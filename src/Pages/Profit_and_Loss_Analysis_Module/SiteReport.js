import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import siteData from "./siteData";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SiteReportApp = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (site) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSite(null);
    setIsModalOpen(false);
  };

  const getChartData = (site) => ({
    labels: Object.keys(site.expenses),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(site.expenses),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: selectedSite ? `Expense Breakdown for ${selectedSite.siteName}` : "",
      },
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Site Report</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteData.map((site) => (
          <div
            key={site.siteId}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(site)}
          >
            <h2 className="text-xl font-bold text-gray-700">{site.siteName}</h2>
            <p className="text-gray-600">Total Expenses: ₹{site.totalExpenses}</p>
            <p className="text-gray-600">Revenue: ₹{site.revenue}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedSite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {selectedSite.siteName} - Detailed Report
              </h2>
              <button
                className="text-gray-500 hover:text-gray-800 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <Bar
              data={getChartData(selectedSite)}
              options={chartOptions}
              className="mb-4"
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteReportApp;
