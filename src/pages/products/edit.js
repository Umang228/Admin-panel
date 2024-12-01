import Dashboard from '../../components/Dashboard';
import { useRouter } from 'next/router';

export default function EditProduct() {
  const router = useRouter();
  return (
    <Dashboard>
      <h2 className="text-gray-500 text-sm mb-4">Dashboard / Products / Edit Product</h2>
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <div className="flex space-x-8">
        {/* Basic Information Section */}
        <div className="bg-white p-8 rounded-lg shadow w-3/4">
          <form className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Product Name</label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    defaultValue="Sample Product"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Description</label>
                  <textarea
                    placeholder="Product Description"
                    defaultValue="This is a sample product description that provides all the necessary details about the product."
                    className="border border-gray-300 rounded-md p-3 w-full h-28"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Stock & Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Stock</label>
                  <input
                    type="number"
                    placeholder="Stock"
                    defaultValue={50}
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    defaultValue={29.99}
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-light-blue-bg mr-2" defaultChecked />
                  Schedule a discount
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Product Image Section */}
        <div className="bg-white p-8 rounded-lg shadow w-1/4">
          <div>
            <h3 className="text-lg font-bold mb-4">Product Image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <img 
                src="/download.webp" 
                alt="Product Image" 
                className="mx-auto mt-4 w-32 h-32 object-cover" 
              />
            </div>
          </div>

          {/* Visibility Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Visibility</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="published"
                  name="visibility"
                  className="form-radio text-light-blue-bg"
                  defaultChecked
                />
                <label htmlFor="published" className="text-sm">
                  Published
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="scheduled"
                  name="visibility"
                  className="form-radio text-light-blue-bg"
                />
                <label htmlFor="scheduled" className="text-sm">
                  Scheduled
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="hidden"
                  name="visibility"
                  className="form-radio text-light-blue-bg"
                />
                <label htmlFor="hidden" className="text-sm">
                  Hidden
                </label>
              </div>
            </div>
            <div className="mt-6 relative">
              <input
                type="date"
                placeholder="Select Date"
                defaultValue="2024-12-01"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="button"
          onClick={() => router.push('/products')}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg"
        >
          Discard
        </button>
        <button
          type="submit"
          onClick={() => router.push('/products')}
          className="bg-light-blue-bg text-white py-2 px-6 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </Dashboard>
  );
}
