import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <Dashboard>
      <div className="flex justify-between items-center bg-light-blue-bg text-white p-6 rounded-lg shadow-md">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-1 text-lg">Here’s an overview of your dashboard.</p>
        </div>
        <button className="bg-white text-black py-2 px-6 rounded-lg font-bold">
          View Reports
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-600">Total Brands</h2>
          <p className="text-3xl font-bold mt-2 text-light-blue-bg">128</p>
          <p className="text-sm text-gray-400 mt-1">+5 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-600">Total Products</h2>
          <p className="text-3xl font-bold mt-2 text-light-blue-bg">450</p>
          <p className="text-sm text-gray-400 mt-1">+20 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-600">Revenue</h2>
          <p className="text-3xl font-bold mt-2 text-green-500">$12,540</p>
          <p className="text-sm text-gray-400 mt-1">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-600">Pending Orders</h2>
          <p className="text-3xl font-bold mt-2 text-red-500">35</p>
          <p className="text-sm text-gray-400 mt-1">-8 this week</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-600 mb-4">
            Sales Overview
          </h3>
          <div className="h-64">
            {/* Replace with a chart library (e.g., Chart.js or Recharts) */}
            <div className="flex justify-center items-center h-full text-gray-400">
              Sales Chart Placeholder
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-600 mb-4">
            Brands Performance
          </h3>
          <div className="h-64">
            {/* Replace with a chart library */}
            <div className="flex justify-center items-center h-full text-gray-400">
              Brand Chart Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-gray-600 mb-4">
          Recent Activity
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-light-blue-bg rounded-full flex items-center justify-center text-white">
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
                  d="M3 10h11M9 21l3-3-3-3m-5 6V4a2 2 0 012-2h9m5 16h.01"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">New Brand Added: Nike</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white">
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
                  d="M17 9V7a4 4 0 10-8 0v2m6 3h6m-6 4h6m-6 4h6m-6 4h6"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">
                Order Completed: Product ID 345
              </p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
          </li>
        </ul>
      </div>
    </Dashboard>
  );
}
