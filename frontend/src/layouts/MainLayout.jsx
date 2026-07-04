import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import "../styles/layout.css";

function MainLayout({ children }) {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-section">
                <Navbar />

                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;