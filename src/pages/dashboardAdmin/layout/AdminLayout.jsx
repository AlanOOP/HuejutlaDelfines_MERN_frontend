import AdminSidebar from '../partials/AdminSidebar';
// import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import { Toaster } from 'react-hot-toast';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Toaster
        position="bottom-rights"
        reverseOrder={false}
      />
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