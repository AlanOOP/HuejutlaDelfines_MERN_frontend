import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const history = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col w-full space-y-4 md:w-3/12 font-medium">
      <div

        className="flex items-center space-x-2 bg-dark-hard rounded-sm shadow p-2 text-gray-100"
      >

        <img class="w-20 h-20 rounded-full " src="https://media.istockphoto.com/id/1605350658/es/foto/mujer-agua-y-retrato-en-piscina-para-competici%C3%B3n-entrenamiento-o-deporte-profesional-o.jpg?s=2048x2048&w=is&k=20&c=6Zo4Ea6h_tvu5NC28IrVBjQ_-M_lieBUQ_ehAy3Y6D0=" alt="Rounded avatar">
        </img>
        <div className="flex flex-col w-full">
          <span className="ml-2 text-lg text-white font-semibold">Hola, Alan Bienvenido</span>
          <span className="text-lg">
            {/* {data.userDetails ? data.userDetails.name : ""} */}
          </span>
        </div>
      </div>
      <div className="shadow  md:block w-full flex flex-col">
        <div
          //onClick={(e) => history.push("/user/orders")}
          className={`${location.pathname === "/user/orders"
            ? "border-r-4 border-yellow-700 bg-gray-200"
            : ""
            }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
        >
          My Orders
        </div>
        <hr />
        <div
          //onClick={(e) => history.push("/user/profile")}
          className={`${location.pathname === "/user/profile"
            ? "border-r-4 border-yellow-700 bg-gray-200"
            : ""
            }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
        >
          My Accounts
        </div>
        <hr />
        <div
          //onClick={(e) => history.push("/wish-list")}
          className={` px-4 py-4 hover:bg-gray-200 cursor-pointer`}
        >
          My Wishlist
        </div>
        <hr />
        <div
          onClick={(e) => history.push("/user/setting")}
          className={`${location.pathname === "/user/setting"
            ? "border-r-4 border-yellow-700 bg-gray-200"
            : ""
            }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
        >
          Setting
        </div>
        <hr />
        <div
          // onClick={(e) => logout()}
          className={`${location.pathname === "/admin/dashboard/categories"
            ? "border-r-4 border-yellow-700 bg-gray-200"
            : ""
            }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
        >
          Logout
        </div>
      </div>
    </div>
  )
}

export default Sidebar