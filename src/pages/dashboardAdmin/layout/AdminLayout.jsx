
import AdminSidebar from '../partials/AdminSidebar';

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