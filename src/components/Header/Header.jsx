import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";

export default function Header() {
  const [dropNav, setDropNav] = useState(false);

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
    <header>
      <div className="border-b bg-neutral-900 px-2 h-15 justify-around text-neutral-100 border-neutral-400 flex items-center">
        <NavLink to="/" className="max-w-30">
          <img src={logo} alt="Creator Smela" />
        </NavLink>

        <div className="w-full justify-between items-center max-w-4xl md:flex hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-neutral-50" : ""
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/get-in-touch"
            className="bg-gradient-to-t from-purple-600/70 via-indigo-500/70 to-blue-600/80 backdrop-blur rounded-xl px-2 py-3 text-white font-medium"
          >
            Get In Touch
          </NavLink>
        </div>


        <button
          onClick={() => setDropNav((prev) => !prev)}
          className="md:hidden text-white text-2xl"
        >
          {dropNav ? "✕" : (
            <img src={menuIcon} alt="Menu" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`${
          dropNav ? "flex" : "hidden"
        } md:hidden flex-col border-b bg-neutral-700 text-neutral-100 items-center gap-4 py-4`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={() => setDropNav(false)}
          >
            {item.label}
          </NavLink>
        ))}

        <NavLink
          to="/get-in-touch"
          onClick={() => setDropNav(false)}
          className="bg-gradient-to-t from-purple-600/70 via-indigo-500/70 to-blue-600/80 backdrop-blur rounded-xl px-2 py-3 text-white font-medium"
        >
          Get In Touch
        </NavLink>
      </div>
    </header>
  );
}