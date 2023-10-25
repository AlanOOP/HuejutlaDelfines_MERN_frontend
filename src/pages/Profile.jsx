import React from 'react';
import LayoutUser from './dashboardUser/LayoutUser';



const Profile = () => {
  return (
    <LayoutUser>
      <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="shadow-lg border">
          <div className="py-4 px-4 text-2xl font-bold text-center ">
            Información Personal
          </div>
          <hr />
          <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
            {/* {fData.success ? ( */}
              
           
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                // onChange={(e) => setFdata({ ...fData, name: e.target.value })}
                value="Alan Alexis Hernandez Francisco"
                type="text"
                id="name"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value="alan@alan.com"
                readOnly
                type="email"
                id="email"
                className="cursor-not-allowed border px-4 py-2 bg-gray-200 w-full focus:outline-none focus:cursor-not-allowed"
              />
              <span className="text-xs text-gray-500">
                No puedes cambiar tu email
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="number">Phone Number</label>
              <input
                // onChange={(e) => setFdata({ ...fData, phone: e.target.value })}
                value="7717128042"
                type="number"
                id="number"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div
              // onClick={(e) => handleSubmit()}
              className="w-full text-center cursor-pointer px-4 py-2 text-gray-100 bg-blue-600"
            >
              Update Information
            </div>
          </div>
        </div>
      </div>


    </LayoutUser>
  )
}

export default Profile