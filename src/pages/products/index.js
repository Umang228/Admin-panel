import { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import ProductTable from '../../components/ProductTable';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const dummyProducts = [
    { name: 'Nike Air Max', category: 'Shoes', stock: 20, price: 120.5 },
    { name: 'Adidas Ultraboost', category: 'Shoes', stock: 15, price: 150.3 },
    { name: 'Puma T-Shirt', category: 'T-Shirt', stock: 30, price: 25.0 },
    { name: 'Reebok Crossfit', category: 'Shoes', stock: 12, price: 99.99 },
    { name: 'Under Armour Hoodie', category: 'Hoodie', stock: 18, price: 80.0 },
    { name: 'Vans Classic', category: 'Shoes', stock: 25, price: 60.5 },
    { name: 'Champion Sweatshirt', category: 'Sweatshirt', stock: 22, price: 45.0 },
    { name: 'Levi’s Jeans', category: 'Jeans', stock: 10, price: 70.99 },
    { name: 'Timberland Boots', category: 'Shoes', stock: 8, price: 180.0 },
    { name: 'North Face Jacket', category: 'Jacket', stock: 5, price: 220.0 },
  ];
  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dashboard>
      <h2 className="text-gray-500 text-sm mb-4">Dashboard / Products</h2>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
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
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md p-2 pl-10 w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/products/add')}
              className="bg-light-blue-bg text-white py-2 px-4 rounded-lg"
            >
              + Add Product
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
        <ProductTable products={filteredProducts} />
      </div>
    </Dashboard>
  );
}
