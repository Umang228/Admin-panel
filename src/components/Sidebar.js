import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  
  function activeTab(path) {
    const router = useRouter();
    return router.pathname.startsWith(path);
  }

  return (
    <div className="w-48 h-screen bg-white shadow-md fixed flex flex-col">
      {/* Logo Section */}
      <div className="p-4 flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Section */}
      <h2 className="text-sm font-semibold text-gray-600 px-4">Menu</h2>
      <nav className="mt-2 flex-1">
        <ul className="space-y-1">
          <li
            className={`p-4 flex items-center mx-4 rounded-xl ${
              activeTab('/dashboard')
                ? 'bg-light-blue-bg text-white' // Active tab styles
                : 'hover:bg-light-blue-bg hover:text-gray-900'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-3 ${
                activeTab('/dashboard') ? 'text-white' : 'text-gray-500'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li
            className={`p-4 flex items-center mx-4 rounded-xl ${
              activeTab('/products')
                ? 'bg-light-blue-bg text-white'
                : 'hover:bg-light-blue-bg hover:text-gray-900'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-3 ${
                activeTab('/products') ? 'text-white' : 'text-gray-500'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 6H4l6 6-6 6h16l-6-6z"
              />
            </svg>
            <Link href="/products">Products</Link>
          </li>
          <li
            className={`p-4 flex items-center mx-4 rounded-xl ${
              activeTab('/brands')
                ? 'bg-light-blue-bg text-white'
                : 'hover:bg-light-blue-bg hover:text-gray-900'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-3 ${
                activeTab('/brands') ? 'text-white' : 'text-gray-500'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <Link href="/brands">Brands</Link>
          </li>
          <li
            className={`p-4 flex items-center mx-4 rounded-xl ${
              activeTab('/customers')
                ? 'bg-light-blue-bg text-white'
                : 'hover:bg-light-blue-bg hover:text-gray-900'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-3 ${
                activeTab('/customers') ? 'text-white' : 'text-gray-500'
              }`}
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
            <Link href="">Customers</Link>
          </li>
        </ul>
      </nav>

      {/* Other Section */}
      <h2 className="text-sm font-semibold text-gray-600 px-4 mt-4">Other</h2>
      <ul className="mt-2 space-y-1">
        <li
          className={`p-4 flex items-center mx-4 rounded-xl ${
            activeTab('/settings')
              ? 'bg-light-blue-bg text-white'
              : 'hover:bg-light-blue-bg hover:text-gray-900'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-3 ${
              activeTab('/settings') ? 'text-white' : 'text-gray-500'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <Link href="">Settings</Link>
        </li>
        <li
          className={`p-4 flex items-center mx-4 rounded-xl ${
            activeTab('/login')
              ? 'bg-light-blue-bg text-white'
              : 'hover:bg-light-blue-bg hover:text-gray-900'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-3 ${
              activeTab('/login') ? 'text-white' : 'text-gray-500'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H3"
            />
          </svg>
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
