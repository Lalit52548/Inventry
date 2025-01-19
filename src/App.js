import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DailySalesReport from './Pages/Site_Daily_Report_Module/index';
import AddSalesEntry from './Pages/Site_Daily_Report_Module/AddSalesEntry';
import ViewEditSalesEntry from './Pages/Site_Daily_Report_Module/ViewEditSalesEntry';
import Sidebar from './Pages/Components/sidebar'; // Import the Sidebar component
import './App.css'; // Import Tailwind styles
// import Settings from "./pages/Settings";
import DieselModule from "./Pages/Diesel_Module/index";
import ProfitLossAnalysis from "./Pages/Profit_and_Loss_Analysis_Module/index";
import PaymentManagement from "./Pages/Payment_Management_Module/index";
import SalesReport from "./Pages/Sales_Report_Module/index";
import IndentManagent from "./Pages/Indent_Management_Module/index";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 overflow-x-hidden">
  <Router>
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Inventry</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-6 flex-1">
        <Routes>
          <Route path="/" element={<DailySalesReport />} />
          <Route path="/add-sales-entry" element={<AddSalesEntry />} />
          <Route path="/view-edit-sales-entry/:id" element={<ViewEditSalesEntry />} />
          <Route path="/diesel-module" element={<DieselModule />} />
          <Route path="/daily-sales-report" element={<DailySalesReport />} />
          <Route path="/profit-loss-analysis" element={<ProfitLossAnalysis />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
          <Route path="/sales-report" element={<SalesReport />} />
          <Route path="/Indent-Managentt" element={<IndentManagent />} />
          {/* <Route path="/Settings" element={<Settings />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sales Report Module. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </Router>
</div>
  );
}

export default App;
