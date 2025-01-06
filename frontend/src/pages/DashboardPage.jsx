import ReportsDashboard from '../components/reports/ReportsDashboard';

function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Financial Overview</h2>
      <ReportsDashboard />
    </div>
  );
}

export default DashboardPage;