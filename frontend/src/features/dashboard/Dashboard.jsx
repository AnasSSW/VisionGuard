import MainLayout from "../../components/layout/MainLayout";

import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import CameraGrid from "./components/CameraGrid";
import EventList from "./components/EventList";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <DashboardHeader />

        <DashboardStats />

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <CameraGrid />
          </div>

          <EventList />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;