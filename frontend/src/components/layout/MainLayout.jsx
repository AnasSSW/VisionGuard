import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-8 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;