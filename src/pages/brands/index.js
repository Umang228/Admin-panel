import { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import BrandTable from '../../components/BrandTable';
import { useRouter } from 'next/router';

export default function Brands() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const dummyBrands = [
    {
      name: 'Nike',
      description: 'A leading sportswear brand',
      logo: 'https://via.placeholder.com/50',
    },
    {
      name: 'Adidas',
      description: 'Another major sportswear brand',
      logo: 'https://via.placeholder.com/50',
    },
    {
      name: 'Puma',
      description: 'Known for their footwear and apparel',
      logo: 'https://via.placeholder.com/50',
    },
    {
      name: 'Under Armour',
      description: 'Performance sports gear for athletes',
      logo: 'https://via.placeholder.com/50',
    },
  ];
  const filteredBrands = dummyBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dashboard>
      <h2 className="text-gray-500 text-sm mb-4">Dashboard / Brands</h2>
      <h1 className="text-2xl font-bold mb-4">Brands</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          {/* Search Input with Icon */}
          <div className="relative w-1/3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0L21 21"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md p-2 pl-10 w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/brands/add')}
              className="bg-light-blue-bg text-white py-2 px-4 rounded-lg"
            >
              + Add brands
            </button>
            <button className="flex items-center bg-gray-200 text-black py-2 px-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
              Import CSV
            </button>
          </div>
        </div>

        {/* Product Table */}
        <BrandTable brands={filteredBrands} />
      </div>
    </Dashboard>
  );
}
