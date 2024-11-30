import Dashboard from '../../components/Dashboard';
import { useRouter } from 'next/router';

export default function AddBrand() {
  const router = useRouter();

  return (
    <Dashboard>
      <h2 className="text-gray-500 text-sm mb-4">Dashboard / Brands / Add Brand</h2>
      <h1 className="text-2xl font-bold mb-6">Add Brand</h1>
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
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Description</label>
                  <textarea
                    placeholder="Brand Description"
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
              <p className="text-sm text-gray-500">
                Upload your brand logo. <br />
                <span className="font-bold">Only PNG, JPG format allowed.</span> <br />
                Recommended size: 500×500 pixels.
              </p>
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="bg-light-blue-bg text-white py-2 px-4 rounded-lg cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="button"
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
