import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

const AddEmployee = () => {
  const [form, setForm] = useState({
    fullName: "",
    cnic: "",
    email: "",
    contactNo: "",
    dob: "",
    qualification: "",
    position: "",
    joiningDate: "",
    salary: "",
    address: "",
  });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formData = [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      value: form.fullName,
      onchange: handleChange,
      placeholder: "Full Name",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: form.email,
      onchange: handleChange,
      placeholder: "Email",
    },
    {
      label: "Contact No",
      type: "number",
      name: "contactNo",
      value: form.contactNo,
      onchange: handleChange,
      placeholder: "Contact No",
    },
    {
      label: "Date Of Birth",
      type: "date",
      name: "dob",
      value: form.dob,
      onchange: handleChange,
      placeholder: "dob",
    },
    {
      label: "CNIC No",
      type: "number",
      name: "cnic",
      value: form.cnic,
      onchange: handleChange,
      placeholder: "CNIC No",
    },
    {
      label: "Qualification",
      type: "text",
      name: "qualification",
      value: form.qualification,
      onchange: handleChange,
      placeholder: "Qualification",
    },
    {
      label: "Position",
      type: "text",
      name: "position",
      value: form.position,
      onchange: handleChange,
      placeholder: "Position",
    },
    {
      label: "Date Of Joining",
      type: "text",
      name: "joiningDate",
      value: form.joiningDate,
      onchange: handleChange,
      placeholder: "Date Of Joining",
    },
    {
      label: "Salary",
      type: "number",
      name: "salary",
      value: form.salary,
      onchange: handleChange,
      placeholder: "Salary",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      value: form.address,
      onchange: handleChange,
      placeholder: "Address",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:6392/api/v1/admin/add-employee", form
      );
      console.log("res =>", res);
    } catch (error) {
      console.log("error", error);
    }
  };
  //  : "", cnic : "",  qualification : "", position : "", joiningDate : "", salary : "", address : "",
  return (
    <div className="w-full bg-[#23a07b] p-6 rounded text-white">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="text-center text-3xl font-bold mb-4">Add Employee</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y--2 gap-x-4">
          {formData.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              name={input.name}
              type={input.type}
              value={form.value}
              onChange={handleChange}
              placeholder={input.placeholder}
              required
            />
          ))}
        </div>
        <button className="w-full bg-teal-600 rounded py-2" type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
