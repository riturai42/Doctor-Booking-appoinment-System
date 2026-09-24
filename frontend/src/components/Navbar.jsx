import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "Doctors", link: "/doctors" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          {/* Logo + Wise Doctor */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Wise Doctor Logo"
              className="w-12 h-12 object-contain"
            />

            <span className="text-2xl font-bold text-blue-600">
              Wise Doctor
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login / Profile */}
          <div className="hidden md:block">
            {user ? (
              <Link
                to="/profile"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col gap-4 mt-5 pb-2 md:hidden">

            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-center"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-center"
              >
                Login
              </Link>
            )}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


