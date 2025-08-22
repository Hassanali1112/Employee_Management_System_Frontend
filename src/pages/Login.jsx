import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useLoginForm } from "../hooks/useLoginForm";
import Loader from "../components/Loader";

const Login = () => {
  const { form, errors, isSubmitting, handleChange, handleSubmit } =
    useLoginForm();
  console.log(errors);

  const formData = [
    {
      label: "Email Address",
      type: "email",
      name: "email",
      value: form.email,
      onchange: handleChange,
      placeholder: "Enter Your Email",
      errors: errors.email,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: form.password,
      onchange: handleChange,
      placeholder: "Enter Your Password",
      errors: errors.password,
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-teal-500 from-50% to-gray-100 to-50% space-y-6 px-4">
        <h2 className="poppins font-black text-2xl md:text-3xl text-center  text-white">
          Employee Management System
        </h2>
        <div className=" border border-gray-400 rounded shadow shadow-gray-600 p-6 w-auto  md:w-90 bg-white flex flex-col">
          <h2 className="poppins font-black text-2xl mb-4 text-center">
            Login Form
          </h2>
          {errors ? <p className="text-red-400">{errors.email}</p> : ""}
          <form className="w-full" onSubmit={handleSubmit}>
            {errors.email ? <p className="text-red-400">{errors.email}</p> : ""}
            {errors.password ? (
              <p className="text-red-400 text-[12px]">{errors.password}</p>
            ) : (
              ""
            )}
            {formData.map((input, index) => (
              <Input
                key={index}
                label={input.label}
                name={input.name}
                type={input.type}
                value={form.value}
                onChange={handleChange}
                placeholder={input.placeholder}
                error={input.errors}
                required
              />
            ))}

            <div className="mb-4 flex items-center justify-between ">
              <label htmlFor="checkbox" className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ms-1 text-[13px] md:text-xl">Remember me</span>
              </label>
              <Link className="text-teal-700 text-[13px] md:text-xl" to="#">
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="bg-teal-500 text-xl w-full text-white flex gap-2 justify-center items-center p-2 text-center rounded-xl  "
            >
              {isSubmitting ? <Loader /> : ""} Login
            </button>
            {/* <input type="submit" value={`${isSubmitting ? <Loader /> : ''}  Login`} /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
