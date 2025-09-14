import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import Navbar from "../../components/dashboard/Navbar";
import Dashboard from "../../components/dashboard/Dashboard";

const AdminDashbord = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    const getUser = () => {
      if (!user) {
        navigate("/login");
      }
    };
    getUser();
  }, []);

  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        {" "}
        <Loader />
      </div>
    );

  return (
    <>
      <DashboardSidebar />
      <div className="sm:ml-64 h-dvh bg-white text-black">
        <Navbar />
        <div className="p-6 bg-gray-600 pt-20 min-h-dvh">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashbord;
