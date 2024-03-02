<<<<<<< HEAD

import AdminSidebar from '../partials/AdminSidebar';

=======
// import React from 'react'
import AdminSidebar from '../partials/AdminSidebar';
// import Layout from '../../../components/Layout';
>>>>>>> ae19f65f1bc766fccbe99e6dba83cf5a13ac9c8e
import Header from '../../../components/Header';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <section className="flex bg-gray-100">
        <AdminSidebar />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
    </div>

  )
}

export default AdminLayout