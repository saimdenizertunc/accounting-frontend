import IncomeExpenseChart from '../components/reports/IncomeExpenseChart';
import ExpensePieChart from '../components/reports/ExpensePieChart';
import BalanceTrendChart from '../components/reports/BalanceTrendChart';

function ReportsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Reports & Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <ExpensePieChart />
      </div>
      
      <BalanceTrendChart />
    </div>
  );
}

export default ReportsPage;