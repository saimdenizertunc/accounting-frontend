import DashboardStats from './DashboardStats';
import IncomeExpenseChart from './IncomeExpenseChart';
import ExpensePieChart from './ExpensePieChart';
import BalanceTrendChart from './BalanceTrendChart';

function ReportsDashboard() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <ExpensePieChart />
      </div>
      
      <div>
        <BalanceTrendChart />
      </div>
    </div>
  );
}

export default ReportsDashboard;