import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-48 right-0 h-16 flex items-center px-6 justify-between">
      {/* Search Input */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search something here"
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded-md p-2 pl-10 w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M16.65 9.65a7 7 0 11-7-7 7 7 0 017 7z"
          />
        </svg>
      </div>

      <div className="flex items-center space-x-6">
        {/* Bell Icon */}
        <div className="relative">
          <button className="icon-btn text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3a2.032 2.032 0 01-.595 1.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 h-5 w-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
              4
            </span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative hover-dropdown">
          <div className="flex items-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-10 h-11 rounded-full"
            />
            <div className="ml-2 text-sm">
              <span className="font-bold">Umang Goyal</span>
              <br />
              <span className="text-gray-600">goyalumang910@mail.com</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          <div className="hover-dropdown-content">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
