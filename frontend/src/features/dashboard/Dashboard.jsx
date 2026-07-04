import MainLayout from "../../components/layout/MainLayout";

import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";

function Dashboard() {
  return (
    <MainLayout>

      <DashboardHeader />

      <DashboardStats />

    </MainLayout>
  );
}

export default Dashboard;