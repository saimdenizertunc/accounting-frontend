import AccountList from '../components/accounts/AccountList';
import AccountForm from '../components/accounts/AccountForm';

function AccountsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Accounts Overview</h2>
      <AccountList />
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">New Account</h3>
        <AccountForm />
      </div>
    </div>
  );
}

export default AccountsPage;