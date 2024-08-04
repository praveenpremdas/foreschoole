'use client'
import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClassesDropdownOpen, setIsClassesDropdownOpen] = useState(false);
  const [isExamsDropdownOpen, setIsExamsDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClassesDropdownToggle = () => {
    setIsClassesDropdownOpen(!isClassesDropdownOpen);
    if (isExamsDropdownOpen) {
      setIsExamsDropdownOpen(false);
    }
  };

  const handleExamsDropdownToggle = () => {
    setIsExamsDropdownOpen(!isExamsDropdownOpen);
    if (isClassesDropdownOpen) {
      setIsClassesDropdownOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && !event.target.closest('.dropdown-btn')) {
        setIsClassesDropdownOpen(false);
        setIsExamsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const classes = ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center h-14 w-28 bg-gray-100 rounded-lg md:visible lg:ml-0 shadow-2xl shadow-gray-700/80 sm:hidden lg:flex">
              <img
                className="object-cover h-24 w-28 pr-2 pt-1"
                src="/logo.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block py-2">
              <div className="flex space-x-4">
                <div className="relative dropdown">
                  <button
                    onClick={handleClassesDropdownToggle}
                    className="dropdown-btn rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Classes
                  </button>
                  {isClassesDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      {classes.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative dropdown">
                  <button
                    onClick={handleExamsDropdownToggle}
                    className="dropdown-btn rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Competitive Exams
                  </button>
                  {isExamsDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      {classes.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="shadow-lg shadow-blue-500/50 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center inline-flex items-center dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <div className="relative dropdown">
            <button
              onClick={handleClassesDropdownToggle}
              className="dropdown-btn block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Classes
            </button>
            {isClassesDropdownOpen && (
              <div className="absolute z-10 w-full bg-white rounded-md shadow-lg">
                {classes.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="relative dropdown">
            <button
              onClick={handleExamsDropdownToggle}
              className="dropdown-btn block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Competitive Exams
            </button>
            {isExamsDropdownOpen && (
              <div className="absolute z-10 w-full bg-white rounded-md shadow-lg">
                {classes.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
