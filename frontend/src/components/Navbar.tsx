import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Explore" },
    { to: "/menu", label: "Menu" },
    { to: "/reservations", label: "Reserve Table" },
    { to: "/about", label: "About" },
    { to: "/corporate", label: "Corporate" },
    ...(isAuthenticated ? [{ to: "/orders", label: "Orders" }] : []),
    ...(user?.role === "admin" ? [{ to: "/admin", label: "Admin" }] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-primary dark:text-darkText"
          >
            R&R Bistro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Auth */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-200 flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Auth */}
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-gray-700 dark:text-gray-200 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {user?.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-primary text-white font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:text-primary"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-primary text-white font-semibold"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}

            {/* Theme Toggle in Mobile */}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
