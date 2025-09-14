import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <div className="space-y-4">
      <div className="flex  justify-between items-center">
        <input
          className="px-4 py-2 border  border-black rounded text-black/90"
          type="text"
          placeholder="Search Employee"
        />
        <Link
          to={"/admin-dashboard/add-employee"}
          className="bg-teal-400 px-3 py-2 rounded"
        >
          Add Employee
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S#</th>
              <th>Department</th>
              <th>Date</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>19</th>
              <td>Teddie Duerden</td>
              <td>Staff Accountant III</td>
              <td>Pouros, Ullrich and Windler</td>
              <td>France</td>
              <td>10/27/2020</td>
              <td>Aquamarine</td>
            </tr>
            <tr>
              <th>20</th>
              <td>Lorelei Blackstone</td>
              <td>Data Coordiator</td>
              <td>Witting, Kutch and Greenfelder</td>
              <td>Kazakhstan</td>
              <td>6/3/2020</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
