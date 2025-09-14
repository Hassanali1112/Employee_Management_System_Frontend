import React from 'react'

const AddDepartment = () => {
  return (
    <div className=' flex justify-center pt-4 '>
      <div className='w-74 border rounded h-auto'>
        <h2>Add New Department</h2>
        <div>
          <label htmlFor="dep_name">Department Name :</label>
          <input
          className='border border-gr'
            type="text"
            id="dep_name"
            name="dep_name"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label htmlFor="dep_description">Department Description :</label>
          <textarea
            type="text"
            id="dep_description"
            name="dep_description"
            placeholder="Enter Description"
          />
        </div>
      </div>

    </div>
  );
}

export default AddDepartment