import React, { useState } from 'react';
import Header from './Header';
import DetailsTable from './DetailsTable';
import LabourDetails from './LabourTable';
import Summary from './summaryComponent';
import ConstructionReportForm from './Form';

const App = () => {
    const data = {
        header: {
          title: "Musale Construction",
          division: "Division A",
          date: "2025-01-03",
          supervisor: "John Doe",
          agency: "ABC Agency",
          work_executed: "Road Work"
        },
        details: [
          {
            sr_no: 1,
            name_of_particulars: "GSB",
            length: 600,
            width: 9,
            thickness: 0.15,
            contents_of_area: 810,
            unit: "cum",
            rate: 2000,
            total: 1620000
          }
        ],
        labour_details: [
          { type: "Male", qty: 10, rate: 500, amount: 5000 },
          { type: "Female", qty: 5, rate: 300, amount: 1500 }
        ],
        water_tanker: { nos: 2, rate: 1000, amount: 2000 },
        misc_bill: 500
      };
        const [isModalOpen, setModalOpen] = useState(false);

        const openModal = () => setModalOpen(true);
        const closeModal = () => setModalOpen(false);

         const handleFormSubmit = (formData) => {
            console.log("Form Submitted:", formData);
            closeModal(); // Close the modal after submission
        };
    
      return (
        <div className="container mx-auto p-6">
            <button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Construction Report Form
      </button>

      {/* Modal */}
      <ConstructionReportForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      />
          <Header data={data.header} />
          <DetailsTable details={data.details} />
          <LabourDetails labour={data.labour_details} />
          <Summary waterTanker={data.water_tanker} miscBill={data.misc_bill} />
          {/* <ConstructionReportForm onSubmit={handleFormSubmit} /> */}
        </div>
      );
    };

export default App;