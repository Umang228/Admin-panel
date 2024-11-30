import { useState } from 'react';
import { useRouter } from 'next/router';

export default function BrandsTable({ brands }) {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleDeleteClick = (brand) => {
    setSelectedBrand(brand);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setSelectedBrand(null);
  };

  const handleDeleteConfirm = () => {
    console.log(`Brand ${selectedBrand.name} deleted`);
    setShowDialog(false);
    setSelectedBrand(null);
  };

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-4">
              <input type="checkbox" />
            </th>
            <th className="border p-4">Logo</th>
            <th className="border p-4">Brands</th>
            <th className="border p-4">Description</th>
            <th className="border p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand, index) => (
            <tr key={index} className="text-center">
              <td className="border p-4">
                <input type="checkbox" />
              </td>
              <td className="border p-4">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-12 object-cover mx-auto rounded-full"
              />
            </td>
              <td className="border p-4">{brand.name}</td>
              <td className="border p-4">{brand.description}</td>
              <td className="border p-4 flex justify-center space-x-2">
                {/* Edit Button */}
                <button
                  onClick={() => router.push('/brands/edit')}
                  className="bg-light-blue-bg text-white p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4h-2.59a2 2 0 00-1.41.59l-4.29 4.3a2 2 0 000 2.83l7.99 7.99a2 2 0 002.83 0l4.3-4.3a2 2 0 00.59-1.41V13"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.5 9.5l5-5M14 3h6v6"
                    />
                  </svg>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteClick(brand)}
                  className="bg-red-600 text-white p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6h18M9 6v14M15 6v14M19 6a1 1 0 011 1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a1 1 0 011-1h14zM10 11h4m-4 4h4"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">
              Are you sure you want to delete{' '}
              <span className="font-bold">{selectedBrand?.name}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDialogClose}
                className="bg-gray-300 text-black p-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 text-white p-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
