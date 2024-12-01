import Dashboard from '../../components/Dashboard';
import { useRouter } from 'next/router';

export default function EditBrand() {
  const router = useRouter();

  return (
    <Dashboard>
      <h2 className="text-gray-500 text-sm mb-4">Dashboard / Brands / Edit Brand Details</h2>
      <h1 className="text-2xl font-bold mb-6">Edit Brand Details</h1>
      <div className="flex space-x-8">
        {/* Basic Information Section */}
        <div className="bg-white p-8 rounded-lg shadow w-3/4">
          <form className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Brand Name</label>
                  <input
                    type="text"
                    placeholder="Brand Name"
                    defaultValue="Sample Brand"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Description</label>
                  <textarea
                    placeholder="Brand Description"
                    defaultValue="This is a sample brand description that provides all the necessary details about the brand."
                    className="border border-gray-300 rounded-md p-3 w-full h-28"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Brand Logo Section */}
        <div className="bg-white p-8 rounded-lg shadow w-1/4">
          <div>
            <h3 className="text-lg font-bold mb-4">Brand Logo</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <img 
                src="/download.webp" 
                alt="Brand Image" 
                className="mx-auto mt-4 w-32 h-32 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="button"
          onClick={() => router.push('/brands')}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => router.push('/brands')}
          className="bg-light-blue-bg text-white py-2 px-6 rounded-lg"
        >
          Add Brand
        </button>
      </div>
    </Dashboard>
  );
}
