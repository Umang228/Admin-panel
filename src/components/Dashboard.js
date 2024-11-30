import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Dashboard({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-48">
        <Navbar />
        <div className="mt-16 p-6 space-y-5">{children}</div>
      </div>
    </div>
  );
}
