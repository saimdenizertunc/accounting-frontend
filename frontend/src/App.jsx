import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import AccountList from './components/accounts/AccountList';
import AccountForm from './components/accounts/AccountForm';
import ReportsDashboard from './components/reports/ReportsDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
              <ReportsDashboard />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Accounts Overview</h2>
              <AccountList />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">New Account</h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <AccountForm />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">New Transaction</h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <TransactionForm />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <TransactionList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;