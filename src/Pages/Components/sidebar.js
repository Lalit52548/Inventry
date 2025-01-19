import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`flex flex-col min-h-screen ${isCollapsed ? "w-20" : "w-64"} bg-gray-800 text-white transition-width duration-300`}>
      <button
        onClick={toggleSidebar}
        className="p-4 focus:outline-none hover:bg-gray-700 transition-colors"
      >
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      <ul className="text-center">
        <SidebarItem
          icon="fa-share-alt"
          label="Connections"
          to="/connections"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-sliders"
          label="Settings"
          to="/settings"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-gas-pump"
          label="Diesel Module"
          to="/diesel-module"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-chart-line"
          label="Daily Sales Report"
          to="/daily-sales-report"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-calculator"
          label="Profit and Loss Analysis"
          to="/profit-loss-analysis"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-money-bill"
          label="Payment Management"
          to="/payment-management"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon="fa-chart-bar"
          label="Sales Report"
          to="/sales-report"
          isCollapsed={isCollapsed}
        />
      </ul>
    </nav>
  );
};

const SidebarItem = ({ icon, label, to, isCollapsed }) => {
  return (
    <li className="relative p-4 cursor-pointer transition-all hover:bg-gray-700 group">
      <Link to={to} className="flex items-center">
        <i className={`fa ${icon} text-2xl`} />
        {!isCollapsed && (
          <span className="ml-4 text-lg">{label}</span>
        )}
        <span className={`tooltip absolute bg-gray-800 text-white text-sm py-1 px-3 rounded left-[90px] top-1/2 transform -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 group-hover:visible ${isCollapsed ? "block" : "hidden"}`}>
          {label}
        </span>
      </Link>
    </li>
  );
};

export default Sidebar;