import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaUsers,
  FaTachometerAlt,
} from "react-icons/fa";

import { FaMoneyBill1Wave } from "react-icons/fa6";

const DashboardSidebar = () => {
  return (
    <div className="w-64  min-h-screen fixed  top-0 left-0 bg-gray-700 hidden sm:block">
      <h2 className="poppins bg-teal-600 text-2xl text-center text-white py-2">
        EMS
      </h2>
      <div className="p-3 flex flex-col gap-2 text-center">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
          end
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/employee"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
        >
          <FaUsers /> <span>Employee</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
        >
          <FaBuilding /> <span>Departments</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
        >
          <FaCalendarAlt /> <span>Leaves</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
        >
          <FaMoneyBill1Wave /> <span>Salary</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            ` flex items-center p-1 ps-3 gap-3 text-white rounded  ${
              isActive ? "bg-teal-500 " : "bg-teal-400"
            } `
          }
        >
          <FaCogs /> <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
