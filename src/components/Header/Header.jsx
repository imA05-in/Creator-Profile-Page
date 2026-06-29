import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { isAction } from "@reduxjs/toolkit";

export default function Header() {
  const navItems = [
    {
      label: "Home",
      path: "/content",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="border-b bg-neutral-700 px-2 h-15 justify-around text-neutral-100 border-neutral-400 flex items-center ">
      <NavLink to={`/`} className="max-w-30">
        <img src={logo} alt="Creator smela" />
      </NavLink>
      <div className="w-full flex justify-between items-center max-w-4xl">

      {navItems.map((item) => {
          return <NavLink 
          key={item.label} 
          to={item.path}
          className={({isActive})=>(
              isActive ? "text-neutral-50" : ""
            )}
            >
          {item.label}
        </NavLink>;
      })}
      <NavLink className={`bg-linear-to-t from-purple-600/70 via-indigo-500/70 to-blue-600/80 backdrop-blur rounded-xl px-2 py-3 text-white font-medium`} to={`/get-in-touch`}>
        Get In Touch
      </NavLink>
      </div>
    </div>
  );
}
