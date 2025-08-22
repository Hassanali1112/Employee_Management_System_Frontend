import React from 'react'

const Input = ({label, name, type, value, onChange, placeholder, error, required}) => {
  
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`border border-gray-300 px-4 py-2 rounded-xl `}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input