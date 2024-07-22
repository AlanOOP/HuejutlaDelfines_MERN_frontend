import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
    link,
    title,
    icon,
    name,
    activeNavName,
    setActiveNavName,
}) => {
    return (
        <NavLink
            onClick={() => setActiveNavName(name)}
            to={link}
            className={({ isActive }) => `flex items-center gap-2 py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300 ${isActive ? "font-bold text-primary" : "font-semibold text-[#A5A5A5]"} `}
        >
            {icon}
            {title}
        </NavLink>
    );
};

export default NavItem;

