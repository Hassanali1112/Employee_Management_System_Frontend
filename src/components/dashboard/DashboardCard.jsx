import React from 'react'

const DashboardCard = ({icon, text, number, color}) => {
  return (
    <div className={`  flex bg-white text-black rounded`}>
      <div className={`p-4 ${color} text-3xl`}>{icon}</div>
      <div className="ps-4 py-1 text-[17px] flex flex-col justify-between">
        <p>{text}</p>
        <p> {number}</p>
      </div>
    </div>
  );
}

export default DashboardCard