import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductTable({ products }) {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setSelectedProduct(null);
  };

  const handleDeleteConfirm = () => {
    console.log(`Product ${selectedProduct.name} deleted`);
    setShowDialog(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-4">
              <input type="checkbox" />
            </th>
            <th className="border p-4">Product</th>
            <th className="border p-4">Category</th>
            <th className="border p-4">Stock</th>
            <th className="border p-4">Price</th>
            <th className="border p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="border p-4">
                <input type="checkbox" />
              </td>
              <td className="border p-4">{product.name}</td>
              <td className="border p-4">{product.category}</td>
              <td className="border p-4">{product.stock}</td>
              <td className="border p-4">${product.price.toFixed(2)}</td>
              <td className="border p-4 flex justify-center space-x-2">
                {/* Edit Button */}
                <button
                  onClick={() => router.push("/products/edit")}
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteClick(product)}
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-2 0h10"
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
              Are you sure you want to delete{" "}
              <span className="font-bold">{selectedProduct?.name}</span>?
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
