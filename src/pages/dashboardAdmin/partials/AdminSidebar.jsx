import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from '../components/NavItem';
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu, AiOutlineSchedule } from "react-icons/ai";
import { FaComments, FaUser, FaDiscourse, FaChalkboardTeacher, FaBlogger, FaPhotoVideo, FaQuestionCircle } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const AdminSidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("");

  return (
    <div
      id="sidebar"
      className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600"
    >
      <h4 className="mt-10 font-bold text-gray-600 text-center text-xl">
        Ménu <span className='text-blue-500'>Principal</span>
      </h4>
      <div className="mt-6 flex flex-col gap-y-[0.563rem] ml-4">
        <hr className="border-b border-gray-200" />
        <NavItem
          title="Dashboard"
          link="/admin/dashboard"
          icon={<AiFillDashboard className="text-xl" />}
          name="dashboard"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />


        <NavItem
          title="Cursos"
          link="/admin/dashboard/courses"
          icon={<FaUser className="text-xl" />}
          name="users"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />

        <NavItem
          title="Membresia"
          link="/admin/dashboard/membership"
          icon={<FaDiscourse className="text-xl" />}
          name="courses"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />


        <NavItem
          title="Instructores"
          link="/admin/dashboard/instructors"
          icon={<FaChalkboardTeacher className="text-xl" />}
          name="instructors"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />

        <NavItem
          title="Noticias"
          link="/admin/dashboard/noticias"
          icon={<FaBlogger className="text-xl" />}
          name="blog"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />
        <NavItem
          title="Galería"
          link="/admin/dashboard/galery"
          icon={<FaPhotoVideo className="text-xl" />}
          name="galery"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />
        <NavItem
          title="Competencias"
          link="/admin/dashboard/competence"
          icon={<GiPodiumWinner className="text-xl" />}
          name="competence"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />

        <NavItem
          title="Horarios"
          link="/admin/dashboard/schedule"
          icon={<AiOutlineSchedule className="text-xl" />}
          name="schedule"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />
        <NavItem
          title="Faqs"
          link="/admin/dashboard/faqs"
          icon={<FaQuestionCircle className="text-xl" />}
          name="faq"
          activeNavName={activeNavName}
          setActiveNavName={setActiveNavName}
        />

      </div>






    </div>


  )
}

export default AdminSidebar