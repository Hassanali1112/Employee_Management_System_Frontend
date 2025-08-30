import React from 'react'
import DashboardCard from './DashboardCard';
import { FaBuilding, FaUsers } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const Dashboard = () => {
  return (
    <div className=''>
      <h2>Dashboard Summary</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 mb-4">
        <DashboardCard
          icon={<FaBuilding />}
          text="Departments"
          number="4"
          color={"bg-green-400"}
        />
        <DashboardCard
          icon={<FaUsers />}
          text="Total Employee"
          number="10"
          color={"bg-yellow-400"}
        />
        <DashboardCard
          icon={<FaMoneyBill1Wave />}
          text="Total Employee"
          number="10"
          color={"bg-red-500"}
        />
      </div>
      <div>
        hello
      </div>
    </div>
  );
}

export default Dashboard