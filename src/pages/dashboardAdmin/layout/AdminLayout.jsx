import React from 'react'
import AdminSidebar from '../partials/AdminSidebar';
import Layout from '../../../components/Layout';

const AdminLayout = ({children}) => {
  return (
    <Layout>
        <section className="flex bg-gray-100">
            <AdminSidebar/>
            <div className="w-full md:w-11/12 h-full">
            {/* All Children pass from here */}
            {children}
        </div>
        </section>
    </Layout>
  )
}

export default AdminLayout