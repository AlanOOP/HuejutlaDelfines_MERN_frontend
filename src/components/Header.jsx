import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../constants';
import useAuth from '../hooks/useAuth';
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Navigate } from 'react-router-dom';
import useDelf from '../hooks/useDelf';



const navItemsInfo = [
  { name: "Inicio", type: "link", href: "/" },
  { name: "Cursos", type: "link", href: "/courses" },
  { name: "Blog", type: "link", href: "/blog" },
  { name: "Acerca de", type: "link", href: "/about" },
  { name: "Galería", type: "link", href: "/galeria" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2 text-slate-700">
            {item.name}
          </Link>
          <span className="cursor-pointer text-blue-800 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            //
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${dropdown ? "block" : "hidden"
              } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};


const Header = () => {

  const navigate = useNavigate();

  const [navIsVisible, setNavIsVisible] = useState(false);
  // const userState = useSelector((state) => state.user);
  const { auth, setAuth, isAdmin, isInstructor, isUser } = useAuth();
  const { darkMode, setDarkMode } = useDelf();

  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };


  const logoutHandler = () => {
    setAuth({
      token: '',
      auth: false,
    });

    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <section
      className={`${darkMode ? "bg-gradient-to-tr from-slate-500 to-sky-900" : "bg-white"} sticky top-0 left-0 right-0 z-50 shadow-md bg-gradient-to-bl from-blue-400 to-blue-200`}
    >
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/">
          <img className="w-20" src={images.Logo} alt="logo" />
        </Link>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>

          {
            !auth.auth ? (
              <button
                onClick={() => navigate("/login")}
                className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-md text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Iniciar Sesión
              </button>
            ) : (
              <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                <div className="relative group">
                  <div className="flex flex-col items-center">
                    {/* <button
                className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-md text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"

              >
                <span>Cuenta</span>
                <MdKeyboardArrowDown />
              </button> */}
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src="https://cloudfront-us-east-1.images.arcpublishing.com/gruponacion/R52P6MRMR5DIFNOPRDODMV23WQ.jpg" alt="Rounded avatar"
                      onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                    />
                    <div
                      className={`${profileDrowpdown ? "block" : "hidden"
                        } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max bg-slate-50`}
                    >
                      <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">

                        {

                          <button
                            onClick={() => navigate("/admin/dashboard")}
                            type="button"
                            className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                          >
                            Admin Dashboard
                          </button>

                        }

                        {
                          isUser() && (
                            <button
                              onClick={() => navigate("/profile")}
                              type="button"
                              className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                            >
                              Perfil
                            </button>
                          )
                        }
                        {
                          isInstructor() && (
                            <button
                              onClick={() => navigate("/instructor/dashboard")}
                              type="button"
                              className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                            >
                              Instructor Dashboard
                            </button>
                          )
                        }
                        <button
                          onClick={logoutHandler}
                          type="button"
                          className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                        >
                          Cerrar sesión
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            )
          }
          <div >
            {/* darkmode y lightmode con switch  */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex gap-x-1 items-center mt-5 lg:mt-0 shadow border-blue-500 px-6 py-2 rounded-sm text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {
                darkMode ?
                  <MdLightMode className='h-6 w-6 text-yellow-500' />
                  : <MdDarkMode className='h-6 w-6 text-slate-700' />
              }
            </button>

          </div>

        </div>
      </header>
    </section>
  )
}

export default Header